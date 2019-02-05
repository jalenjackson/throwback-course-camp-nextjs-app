import Localization from '../localization';
import { IsTheEmailAddressValid } from '../../../../../globalHelpers/validations';
import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';
import Cookies from 'universal-cookie';
import { message } from 'antd';

export const call = async (context, form) => {
  if (context.state.email.trim().length === 0
      || context.state.password.trim().length === 0
      || context.state.name.trim().length === 0) {
    return context.setState({ registerErrorMessage: Localization.NavbarContainer.FillInFieldsError });
  }
  if (!IsTheEmailAddressValid(context.state.email)) {
    return context.setState({ registerErrorMessage: Localization.NavbarContainer.EnterValidEmailAddress })
  }
  context.setState({ registerSubmissionInProgress: true });

  try {
    const registrationResponse = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        createUser(userInput: 
        { 
          name: "${context.state.name}",
          email: "${context.state.email}", 
          password: "${context.state.password}" 
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
      return context.setState({
        registerErrorMessage: registrationResponse.data.errors[0].message,
        registerSubmissionInProgress: false,
      });
    }
    form.resetFields();
    const userCookie = new Cookies();
    userCookie.set('auth', registrationResponse.data.data.createUser, { path: '/' });
    context.setState({
      registerErrorMessage: '',
      registerSubmissionInProgress: false,
      registerFormVisibility: false,
      authenticated: true,
      authorizationToken: registrationResponse.data.data.createUser.token
    });
    message.success("We are so glad you are joining us! Now it's time to learn something new!", 2.5);
  } catch(e) {
    context.setState({
      registerErrorMessage: Localization.NavbarContainer.UnexpectedError,
      registerSubmissionInProgress: false,
    });
  }
};
