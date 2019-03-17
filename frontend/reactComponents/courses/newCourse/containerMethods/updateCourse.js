import btoa from 'btoa';
import { GraphQlMutate, GraphQlDevURI } from '../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';

export const call = async (context, auth, course, type, value) => {
  try {
    let valueToUpdate = value;
    if (type === 'price') {
      valueToUpdate = +value;
    } else {
      valueToUpdate = `"${ value }"`;
    }
    if (type === 'description') valueToUpdate = `"${ btoa(unescape(encodeURIComponent(value))) }"`;
    
    const test = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      updateCourse(courseId: "${ course._id }", courseInput: { ${ type }: ${ valueToUpdate } }) {
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
  `, auth.token);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};

