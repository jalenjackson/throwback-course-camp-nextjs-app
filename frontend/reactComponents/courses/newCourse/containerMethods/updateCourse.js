import btoa from 'btoa';
import { GraphQlDevURI, headers } from '../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';
import axios from "axios";

export const call = async (context, auth, course, type, value) => {
  try {
    let valueToUpdate = value;
    if (type === 'price') {
      valueToUpdate = +value;
    } else {
      valueToUpdate = value;
    }
    if (type === 'description') valueToUpdate = btoa(unescape(encodeURIComponent(value)));
    
    const query = `
      mutation($courseId: String!, $courseInput: CourseInput) {
      updateCourse(courseId: $courseId, courseInput: $courseInput) {
        description
        sections {
          title
          description
          category
          videos {
            title
            description
            videoLocation
            quiz {
              question
              answers
            }
            pictureQuiz {
              question
              answers
            }
            matchingGame {
              questions {
                question
                matchId
              }
              answers {
                answer
                matchId
              }
            }
          }
        }
      }
    }
    `;
  
    await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(course._id),
        courseInput: { [type]: valueToUpdate }
      }
    }), { headers: headers(auth.token) });
    
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
