import Localization from '../localization';
import { IsTheEmailAddressValid } from '../../../../../globalHelpers/validations';
import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';
import Cookies from 'universal-cookie';
import GlobalLocalization from "../../../../../globalLocalization";
import { message } from "antd";

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
          token
        }
      }
    `);
    const userCookie = new Cookies();
    userCookie.set('token', loginResponse.data.data.login.token, { path: '/' });
    window.location.reload();
  } catch (e) {
    form.resetFields();
    return context.setState({
      loginErrorMessage: 'Authentication Failed',
      loginSubmissionInProgress: false,
    });
  }
};
