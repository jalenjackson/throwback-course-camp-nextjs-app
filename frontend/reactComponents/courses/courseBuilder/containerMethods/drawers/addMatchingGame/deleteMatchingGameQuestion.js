import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, matchId) => {
  try {
    const deleteAddMatchingGameQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteMatchingGameQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        matchId: "${ matchId }") {
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
              crunchChallenge {
                target
                definitions
              }
              codingChallenge {
                title
                description	
                functionName
                functionParams
                addedFunctionParams
                startingFunctionText
                returnValue
              }
              codingProject {
                summary
              }
            }
          }
        }
    }

  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, deleteAddMatchingGameQuestionResponseMutation, 'deleteMatchingGameQuestion', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
