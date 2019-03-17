import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, term, type, timeAllotted, matchId) => {
  try {
    const editAddMatchingGameQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      editMatchingGameQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        matchId: "${ matchId }", 
        timeAllotted: ${ +timeAllotted },
        type: "${ type }", 
        term: "${ term }") {
          ${ sharedMutationResponse }  
        }
      }
  `, auth.token);
    updateSectionsAfterAPICall(context, editAddMatchingGameQuestionResponseMutation, 'editMatchingGameQuestion', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
