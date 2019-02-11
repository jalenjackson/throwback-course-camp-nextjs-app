import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';


export const call = async (context, term, type, navbarContainer, questionIterator, answerIterator) => {
  try {
    const editAddQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      updateQuizQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        questionIndex: ${ questionIterator }, 
        answerIndex: ${ answerIterator ? answerIterator : 0 }, 
        term: "${ term }", 
        type: "${ type }") {
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
    updateSectionsAfterAPICall(context, navbarContainer, editAddQuizQuestionResponseMutation, 'updateQuizQuestion', true);
    message.success(`Successfully changed answer to ${ String(term) }`);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
