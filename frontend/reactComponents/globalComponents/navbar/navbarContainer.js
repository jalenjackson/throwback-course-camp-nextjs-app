import { Container } from 'unstated';
import { GraphQlDevURI, GraphQlMutate } from '../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import { IsTheEmailAddressValid } from '../../../../globalHelpers/validations';
import Localization from './localization';
import Cookies from 'universal-cookie';

class NavbarContainer extends Container {
  state = {
    activeLink: '',
    autoCompleteDataSource: [],
    loginFormVisibility: false,
    registerFormVisibility: false,
    profileDrawerVisibility: false,
    name: '',
    email: '',
    password: '',
    loginErrorMessage: '',
    registerErrorMessage: '',
    loginSubmissionInProgress: false,
    registerSubmissionInProgress: false,
    authorizationToken: '',
    authenticated: false,
  };

  setInitialAuthentication = (authenticated, auth) => {
    this.setState({ authenticated });
    if (authenticated) {
      this.setState({ authorizationToken: auth.token });
    }
  };

  getAutoCompleteDataResults = async (term) => {
    if (term !== '') {
      try {
        const queryMainSearch = await GraphQlMutate(GraphQlDevURI, `
          query {
            globalAutocomplete(term: "${term}") {
              title
            }
          }
        `);
        const queryMainSearchResults = queryMainSearch.data.data.globalAutocomplete;
        const tmpQueryMainSearchResultsArray = [];
        if (queryMainSearchResults.length > 0) {
          queryMainSearch.data.data.globalAutocomplete.map((course) => {
            tmpQueryMainSearchResultsArray.push(course.title);
          });
          this.setState({ autoCompleteDataSource: tmpQueryMainSearchResultsArray });
        } else {
          this.setState({ autoCompleteDataSource: [] });
        }
      } catch (e) {
        this.setState({ autoCompleteDataSource: [] });
      }
    } else {
      this.setState({ autoCompleteDataSource: [] });
    }
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
        loginFormVisibility: false,
        authenticated: true,
        authorizationToken: loginResponse.data.data.login.token
      });
      message.success("You are logged in! Now it's time to learn something new!", 2.5);
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
        registerFormVisibility: false,
        authenticated: true,
        authorizationToken: registrationResponse.data.data.createUser.token
      });
      message.success("We are so glad you are joining us! Now it's time to learn something new!", 2.5);
    } catch(e) {
      this.setState({
        registerErrorMessage: Localization.NavbarContainer.UnexpectedError,
        registerSubmissionInProgress: false,
      });
    }
  };

  signUserOut = async () => {
    const userCookie = new Cookies();
    userCookie.set('auth', { authenticated: false }, { path: '/' });
    this.setState({ authenticated: false, profileDrawerVisibility: false, authorizationToken: '' });
    message.success(Localization.NavbarContainer.SignOutFinished, 2.5);
  }
}

export default NavbarContainer;
