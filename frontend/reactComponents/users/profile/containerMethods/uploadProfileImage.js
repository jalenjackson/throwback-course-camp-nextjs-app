import { GraphQlMutate, GraphQlDevURI } from "../../../../../globalHelpers/axiosCalls";
import Cookies from "universal-cookie";
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';

export const call = async (context, profileImage) => {
  try {
    const userProfileImageResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      uploadProfileImage(image: "${profileImage}") {
        _id
        email
        name
        token
        moneyMade
        profileImage
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
  `, context.state.auth.token);
    const userCookie = new Cookies();
    userProfileImageResponse.data.data.uploadProfileImage.token = context.state.auth.token;
    userCookie.set('auth', userProfileImageResponse.data.data.uploadProfileImage, { path: '/' });
    context.setState({ auth: userProfileImageResponse.data.data.uploadProfileImage });
    console.log(userCookie.get('auth'))
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};