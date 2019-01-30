import { Container } from 'unstated';
import { GraphQlDevURI, GraphQlMutate } from '../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import { IsTheEmailAddressValid } from '../../../../globalHelpers/validations';
import Localization from './localization';
import Cookies from 'universal-cookie';

class NavbarContainer extends Container {
  state = {
    activeLink: '',
    autoCompleteDataSource: ['course 1', 'course 2', 'course 3'],
    loginFormVisibility: false,
    registerFormVisibility: false,
    name: '',
    email: '',
    password: '',
    loginErrorMessage: '',
    registerErrorMessage: '',
    loginSubmissionInProgress: false,
    registerSubmissionInProgress: false,
    authorizationToken: '',
  };

  getAutoCompleteDataResults = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  setContainerState = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  handleLoginSubmission = async form => {
    if (this.state.email.trim().length === 0 || this.state.password.trim().length === 0) {
      return this.setState({ loginErrorMessage: Localization.NavbarContainer.FillInFieldsError });
    }
    if (!IsTheEmailAddressValid(this.state.email)) {
      return this.setState({ loginErrorMessage: Localization.NavbarContainer.EnterValidEmailAddress })
    }
    this.setState({ loginSubmissionInProgress: true });
    try {
      const loginResponse = await GraphQlMutate(GraphQlDevURI, `
      query {
        login(email: "${this.state.email}", password: "${this.state.password}") {
          _id
          email
          name
          token
        }
      }
    `);
      form.resetFields();
      const userCookie = new Cookies();
      userCookie.set('auth', loginResponse.data.data.login, { path: '/' });
      await this.setState({
        loginErrorMessage: '',
        loginSubmissionInProgress: false,
        loginFormVisibility: false
      });
      window.location.reload();
    } catch (e) {
      form.resetFields();
      this.setState({
        loginErrorMessage: Localization.NavbarContainer.InvalidAuthorization,
        loginSubmissionInProgress: false,
      });
    }
  };

  handleRegistrationSubmission = async form => {
    if (this.state.email.trim().length === 0
        || this.state.password.trim().length === 0
        || this.state.name.trim().length === 0) {
      return this.setState({ registerErrorMessage: Localization.NavbarContainer.FillInFieldsError });
    }
    if (!IsTheEmailAddressValid(this.state.email)) {
      return this.setState({ registerErrorMessage: Localization.NavbarContainer.EnterValidEmailAddress })
    }
    this.setState({ registerSubmissionInProgress: true });

    try {
      const registrationResponse = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        createUser(userInput: 
        { 
          name: "${this.state.name}",
          email: "${this.state.email}", 
          password: "${this.state.password}" 
        }) 
        {
          _id
          email
          name
          token
        }
      }
    `);
      if (registrationResponse.data.errors) {
        form.resetFields();
        return this.setState({
          registerErrorMessage: registrationResponse.data.errors[0].message,
          registerSubmissionInProgress: false,
        });
      }
      form.resetFields();
      const userCookie = new Cookies();
      userCookie.set('auth', registrationResponse.data.data.createUser, { path: '/' });
      this.setState({
        registerErrorMessage: '',
        registerSubmissionInProgress: false,
      });
      window.location.reload();
    } catch(e) {
      this.setState({
        registerErrorMessage: Localization.NavbarContainer.UnexpectedError,
        registerSubmissionInProgress: false,
      });
    }
  };

  signUserOut = async () => {
    const userCookie = new Cookies();
    await message.loading(Localization.NavbarContainer.SignOutQuote, 1);
    userCookie.set('auth', { authenticated: false });
    message.success(Localization.NavbarContainer.SignOutFinished, 2.5);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}

export default NavbarContainer;
