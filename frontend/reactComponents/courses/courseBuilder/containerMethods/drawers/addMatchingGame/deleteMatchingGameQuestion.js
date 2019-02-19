import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, navbarContainer, matchId) => {
  try {
    const deleteAddMatchingGameQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteMatchingGameQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        matchId: "${ matchId }") {
          ${ sharedMutationResponse }
        }
      }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, deleteAddMatchingGameQuestionResponseMutation, 'deleteMatchingGameQuestion', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
