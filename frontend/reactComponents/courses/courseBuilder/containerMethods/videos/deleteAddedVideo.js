import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../helpers';
import GlobalLocalization from '../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, i, navbarContainer, videoLocation) => {
  try {
    const s3VideoId = videoLocation.split('/')[3];
    console.log(s3VideoId)
    const deleteAddedVideoResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteVideo(courseId: "${ context.state.course._id }", sectionIndex: ${ context.state.currentActiveSection }, videoIndex: ${ i }, fileId: "${ s3VideoId }") {
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
    $('.ant-collapse-header').click();
    updateSectionsAfterAPICall(context, navbarContainer, deleteAddedVideoResponse, 'deleteVideo', true);
    context.updateState('currentVideoLocation', '');
    message.success('Video deleted successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
