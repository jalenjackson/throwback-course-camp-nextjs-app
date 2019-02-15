import axios from 'axios';
import GlobalLocalization from '../../../../../globalLocalization';
import { setCourseStatusText } from './misc/setInitialStateFromData';
import { message } from 'antd';

export const call = async (context, navbarContainer, status) => {
  try {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': ` Bearer ${ navbarContainer.state.authorizationToken }`
    };

    let body = {
      courseId: context.state.course._id,
      status,
      course: context.state.course
    };

    await axios.post('http://localhost:5000/api-routes/change-course-status',
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
