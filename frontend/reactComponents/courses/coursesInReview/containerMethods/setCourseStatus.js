import axios from 'axios';
import { message } from 'antd';

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
    
    await axios.post('http://localhost:5000/api-routes/change-course-status',
      JSON.stringify(body),
      { headers });
    message.success('Successfully set course status to ' + status)
  } catch (e) {
    console.log(e)
    message.error('There was an issue approving this course');
  }
};