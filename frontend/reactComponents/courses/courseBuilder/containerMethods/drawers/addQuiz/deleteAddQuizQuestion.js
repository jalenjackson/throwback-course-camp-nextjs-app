import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, questionIndex) => {
  try {
    const deleteAddQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteAddQuizQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        questionIndex: ${ questionIndex }) {
          ${ sharedMutationResponse }
        }
      }
  `, auth.token);
    updateSectionsAfterAPICall(context, deleteAddQuizQuestionResponseMutation, 'deleteAddQuizQuestion', true);
    message.success('Successfully deleted question');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
