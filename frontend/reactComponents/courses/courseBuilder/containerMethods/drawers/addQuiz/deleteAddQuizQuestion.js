import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';


export const call = async (context, navbarContainer, questionIndex) => {
  try {
    const deleteAddQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteAddQuizQuestion(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection }, 
      questionIndex: ${ questionIndex }) {
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
    updateSectionsAfterAPICall(context, navbarContainer, deleteAddQuizQuestionResponseMutation, 'deleteAddQuizQuestion', true);
    message.success('Successfully deleted question');
  } catch (e) {
    console.log(e)
    message.error(GlobalLocalization.UnexpectedError);
  }
};