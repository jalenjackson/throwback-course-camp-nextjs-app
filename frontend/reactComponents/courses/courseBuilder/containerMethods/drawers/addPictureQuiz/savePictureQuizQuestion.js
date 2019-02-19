import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, navbarContainer, question, answers) => {
  try {
    const saveAddPictureQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addPictureQuizQuestionToVideo(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        question: "${ question }", 
        answers: "${ answers }") {
          ${ sharedMutationResponse }
        }
      }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, saveAddPictureQuizQuestionResponseMutation, 'addPictureQuizQuestionToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
