import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (e, navbarContainer, context, question, answers) => {
  try {
    e.preventDefault();
    const answerValuesFiltered = answers.filter((answer) => {
      return answer && answer.trim() !== '';
    });

    const saveAddQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addQuizQuestionToVideo(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        question: "${ question }", 
        answers: "${ answerValuesFiltered }") {
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
            }
          }
        }
      }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, saveAddQuizQuestionResponseMutation, 'addQuizQuestionToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
