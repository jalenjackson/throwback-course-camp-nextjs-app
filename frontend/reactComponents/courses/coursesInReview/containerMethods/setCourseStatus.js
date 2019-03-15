import axios from 'axios';
import { message } from 'antd';
import { host } from "../../../../../globalHelpers/axiosCalls";

export const call = async (context, auth, course, status) => {
  try {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': ` Bearer ${ auth.token }`
    };
    
    let body = {
      courseId: course._id,
      status,
      course: course
    };
    
    await axios.post(`${ host }/api-routes/change-course-status`,
      JSON.stringify(body),
      { headers });
    message.success('Successfully set course status to ' + status)
  } catch (e) {
    message.error('There was an issue approving this course');
  }
};