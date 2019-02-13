import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, question, answer, matchId) => {
  try {
    const saveAddMatchingGameQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addMatchingGameToVideo(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection }, 
      question: { question: "${ question }", matchId: "${ matchId }" }, 
      answer: { answer: "${ answer }", matchId: "${ matchId }" }) {
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
    updateSectionsAfterAPICall(context, navbarContainer, saveAddMatchingGameQuestionResponseMutation, 'addMatchingGameToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
