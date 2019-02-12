import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, term, type, matchId) => {
  try {
    const editAddMatchingGameQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      editMatchingGameQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        matchId: "${ matchId }", 
        type: "${ type }", 
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
    updateSectionsAfterAPICall(context, navbarContainer, editAddMatchingGameQuestionResponseMutation, 'editMatchingGameQuestion', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
