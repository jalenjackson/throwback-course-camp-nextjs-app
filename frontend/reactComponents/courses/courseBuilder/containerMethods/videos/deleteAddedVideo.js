import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../helpers';
import GlobalLocalization from '../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../sharedMutationResponse';

export const call = async (context, i, auth, videoLocation) => {
  try {
    const s3VideoId = videoLocation.split('/')[3];
    const deleteAddedVideoResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteVideo(courseId: "${ context.state.course._id }", sectionIndex: ${ context.state.currentActiveSection }, videoIndex: ${ i }, fileId: "${ s3VideoId }") {
        ${ sharedMutationResponse }
      }
    }
  `, auth.token);
    $('.ant-collapse-header').click();
    updateSectionsAfterAPICall(context, deleteAddedVideoResponse, 'deleteVideo', true);
    context.updateState('currentVideoLocation', '');
    message.success('Index deleted successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
