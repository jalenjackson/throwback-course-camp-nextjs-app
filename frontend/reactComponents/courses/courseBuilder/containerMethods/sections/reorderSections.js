import axios from 'axios';
import GlobalLocalization from '../../../../../../globalLocalization';
import { message } from 'antd';

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

    const reorderSectionsResponse = await axios.post('http://localhost:5000/api-routes/reorder-sections',
      JSON.stringify(body),
      { headers });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
