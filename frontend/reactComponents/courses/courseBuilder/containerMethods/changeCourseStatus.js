import axios from 'axios';
import GlobalLocalization from '../../../../../globalLocalization';
import { setCourseStatusText } from './misc/setInitialStateFromData';
import { message } from 'antd';
import { host } from "../../../../../globalHelpers/axiosCalls";

export const call = async (context, auth, status) => {
  try {
    console.log(process.env)
    
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': ` Bearer ${ auth.token }`
    };

    let body = {
      courseId: context.state.course._id,
      status,
      course: context.state.course,
      devKey: process.env.devKey
    };

    await axios.post(`${ host }/api-routes/change-course-status`,
      JSON.stringify(body),
      { headers });
    const course = context.state.course;
    course.status = status;
    context.setState({
      course,
      courseStatusText: setCourseStatusText(course)
    });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
