import axios from 'axios';
import GlobalLocalization from '../../../../../../globalLocalization';
import { message } from 'antd';
import { host } from "../../../../../../globalHelpers/axiosCalls";

export const call = async (context, auth, newSections) => {
  try {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': ` Bearer ${ auth.token }`
    };

    let body = {
      courseId: context.state.course._id,
      newSections
    };

    await axios.post(`${ host }/api-routes/reorder-sections`,
        JSON.stringify(body),
        { headers });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
