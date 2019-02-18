import btoa from 'btoa';
import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, summary) => {
  try {
    const addCodingProjectResponseMutation = await GraphQlMutate(GraphQlDevURI, `
      mutation {
      addCodingProject(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        summary: "${ btoa(unescape(encodeURIComponent(summary))) }") {
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
    updateSectionsAfterAPICall(context, navbarContainer, addCodingProjectResponseMutation, 'addCodingProject', true);
    message.success('Successfully saved coding project!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
