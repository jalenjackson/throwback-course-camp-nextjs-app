import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, navbarContainer, questionIndex) => {
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
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, deleteAddPictureQuizQuestionResponseMutation, 'deleteAddPictureQuizQuestion', true);
    message.success('Successfully deleted question');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
