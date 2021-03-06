import {GraphQlDevURI, headers} from "../../../../../globalHelpers/axiosCalls";
import Cookies from "universal-cookie";
import GlobalLocalization from '../../../../../globalLocalization';
import { message } from 'antd'
import {IsTheEmailAddressValid} from "../../../../../globalHelpers/validations";
import Localization from "../../../globalComponents/navbar/localization";
import axios from "axios";

export const call = async (context, name, email) => {
  try {
    await context.setState({ isSaving: true });
    
    if (!IsTheEmailAddressValid(email)) {
      return context.setState({ errorMessage: Localization.NavbarContainer.EnterValidEmailAddress })
    }
    
    const token = context.state.auth.token;
    
    const query = `
      mutation($name: String, $email: String) {
        changeUserInfo(name: $name, email: $email) {
          _id
          email
          name
          token
          moneyMade
          token
          profileImage
          createdCourses {
            _id
            title
            studentsEnrolled
            price
          }
          payoutHistory {
            payoutBatchId
            emailAddressReceiver
            amount
          }
          paidCourses {
            _id
            title
            price
          }
          courseProgress {
            courseId
            exercisesPlayed
          }
        }
    }
    `;
  
    const updateUserResponse = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        name,
        email
      }
    }), { headers: headers(token) });
    
    const userCookie = new Cookies();
    userCookie.set('token', updateUserResponse.data.data.changeUserInfo.token, {path: '/'});
    context.setState({ auth: updateUserResponse.data.data.changeUserInfo });
    message.success('Your user information was updated successfully');
    context.setState({ isSaving: false });
  } catch(e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
