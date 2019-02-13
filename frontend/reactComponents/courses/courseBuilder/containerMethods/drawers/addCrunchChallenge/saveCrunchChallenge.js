import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, target, definitions) => {
  try {
    const saveCrunchChallengeResponseMutation = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        addCrunchChallenge(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ context.state.currentActiveSection }, 
          videoIndex: ${ context.state.currentActiveVideoInSection }, 
          target: "${ target }", 
          definitions: "${ definitions }") {
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
    updateSectionsAfterAPICall(context, navbarContainer, saveCrunchChallengeResponseMutation, 'addCrunchChallenge', true);
    message.success('Successfully saved crunch challenge!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
