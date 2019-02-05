import Localization from '../localization';
import { IsTheEmailAddressValid } from '../../../../../globalHelpers/validations';
import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';
import Cookies from 'universal-cookie';
import { message } from 'antd';

export const call = async (context, form) => {
  if (context.state.email.trim().length === 0 || context.state.password.trim().length === 0) {
    return context.setState({ loginErrorMessage: Localization.NavbarContainer.FillInFieldsError });
  }
  if (!IsTheEmailAddressValid(context.state.email)) {
    return context.setState({ loginErrorMessage: Localization.NavbarContainer.EnterValidEmailAddress })
  }
  context.setState({ loginSubmissionInProgress: true });
  try {
    const loginResponse = await GraphQlMutate(GraphQlDevURI, `
      query {
        login(email: "${context.state.email}", password: "${context.state.password}") {
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
    await context.setState({
      loginErrorMessage: '',
      loginSubmissionInProgress: false,
      loginFormVisibility: false,
      authenticated: true,
      authorizationToken: loginResponse.data.data.login.token
    });
    message.success("You are logged in! Now it's time to learn something new!", 2.5);
  } catch (e) {
    form.resetFields();
    context.setState({
      loginErrorMessage: Localization.NavbarContainer.InvalidAuthorization,
      loginSubmissionInProgress: false,
    });
  }
};
