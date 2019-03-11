import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, questionIndex) => {
  try {
    const deleteAddPictureQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteAddPictureQuizQuestion(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection }, 
      questionIndex: ${ questionIndex }) {
        ${ sharedMutationResponse }
      }
    }
  `, auth.token);
    updateSectionsAfterAPICall(context, deleteAddPictureQuizQuestionResponseMutation, 'deleteAddPictureQuizQuestion', true);
    message.success('Successfully deleted question');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
