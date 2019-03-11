import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, target, definitions) => {
  try {
    const saveCrunchChallengeResponseMutation = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        addCrunchChallenge(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ context.state.currentActiveSection }, 
          videoIndex: ${ context.state.currentActiveVideoInSection }, 
          target: "${ target }", 
          definitions: "${ definitions }") {
            ${ sharedMutationResponse }
          }
        }
  `, auth.token);
    updateSectionsAfterAPICall(context, saveCrunchChallengeResponseMutation, 'addCrunchChallenge', true);
    message.success('Successfully saved crunch challenge!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
