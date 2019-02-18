import btoa from 'btoa';
import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, title, description, functionText, returnValue, functionName, functionParams, addedParams) => {
  try {
    const addCodingChallengeResponseMutation = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        addCodingChallenge(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ context.state.currentActiveSection }, 
          videoIndex: ${ context.state.currentActiveVideoInSection }, 
          codingChallengeInput: 
            { 
              title: "${ title }", 
              description: "${ btoa(unescape(encodeURIComponent(description))) }", 
              startingFunctionText: "${ btoa(unescape(encodeURIComponent(functionText))) }", 
              returnValue: "${ returnValue }", 
              functionName: "${ functionName }", 
              functionParams: "${ functionParams }", 
              addedFunctionParams: "${ addedParams }" 
            }) {
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
    updateSectionsAfterAPICall(context, navbarContainer, addCodingChallengeResponseMutation, 'addCodingChallenge', true);
    message.success('Successfully saved coding challenge!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
