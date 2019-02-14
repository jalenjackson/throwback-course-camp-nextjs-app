import { GraphQlDevURI, GraphQlMutate } from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';

export const call = async (context, videoLocation, currentActiveSection) => {
  try {
    console.log(currentActiveSection)
    const uploadedVideoResponse = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        addVideoToSection(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ currentActiveSection }, 
          videoInput: 
            { title: "", description: "", videoLocation: "${ videoLocation }" }) {
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
      `);
    updateSectionsAfterAPICall(context, false, uploadedVideoResponse, 'addVideoToSection', false);
    message.success('Your amazing video has been uploaded!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError)
  }
};
