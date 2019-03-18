import Localization from '../localization';
import { IsTheEmailAddressValid } from '../../../../../globalHelpers/validations';
import {GraphQlDevURI, GraphQlMutate, headers} from '../../../../../globalHelpers/axiosCalls';
import Cookies from 'universal-cookie';
import { message } from 'antd';
import GlobalLocalization from "../../../../../globalLocalization";
import axios from "axios";

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
    const query = `
      mutation($userInput: UserInput) {
          createUser(userInput: $userInput)
          {
           token
          }
        }
    `;
  
    const registrationResponse = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        userInput:
          {
            name: context.state.name,
            email: context.state.email,
            password: context.state.password
          }
      }
    }), { headers: headers('undefined') });
    
    form.resetFields();
    if (registrationResponse.data.errors) {
      form.resetFields();
      return context.setState({
        registerErrorMessage: registrationResponse.data.errors[0].message,
        registerSubmissionInProgress: false,
      });
    }
    const userCookie = new Cookies();
    userCookie.set('token', registrationResponse.data.data.createUser.token, { path: '/' });
    window.location.reload();
  } catch(e) {
    console.log(e)
    context.setState({ registerSubmissionInProgress: false });
    message.error(GlobalLocalization.UnexpectedError);
  }
};

/*
mutation {
        createUser(userInput:
        {
          name: "${context.state.name}",
          email: "${context.state.email}",
          password: "${context.state.password}"
        })
        {
         token
        }
      }
 */