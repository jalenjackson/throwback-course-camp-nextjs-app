import { GraphQlMutate, GraphQlDevURI } from '../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';

export const call = async (context, course, type, value) => {
  try {
    let valueToUpdate = value;
    if (type === 'price') {
      valueToUpdate = +value;
    } else {
      valueToUpdate = `"${ value }"`;
    }
    if (type === 'description') valueToUpdate = `"${ btoa(value) }"`;

    const updateCourseResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      updateCourse(courseId: "${ course._id }", courseInput: { ${ type }: ${ valueToUpdate } }) {
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
  `);
    console.log(updateCourseResponse)
  } catch (e) {
    console.log(e)
    message.error(GlobalLocalization.UnexpectedError);
  }
};

