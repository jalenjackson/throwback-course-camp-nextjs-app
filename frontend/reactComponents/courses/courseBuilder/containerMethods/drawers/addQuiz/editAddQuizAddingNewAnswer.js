import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, term, questionIterator) => {
  try {
    const addAnotherQuizQuestionToQuizResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addAnotherQuizQuestionToQuiz(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection }, 
      questionIndex: ${ questionIterator }, 
      term: "${ term }") {
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
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, addAnotherQuizQuestionToQuizResponse, 'addAnotherQuizQuestionToQuiz', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
