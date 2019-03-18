import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, target, definitions) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $target: String!, $definitions: String!) {
        addCrunchChallenge(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          videoIndex: $videoIndex,
          target: $target,
          definitions: $definitions) {
            ${ sharedMutationResponse }
          }
        }
    `;
  
    const saveCrunchChallengeResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        target,
        definitions: String(definitions)
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, saveCrunchChallengeResponseMutation, 'addCrunchChallenge', true);
    message.success('Successfully saved crunch challenge!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
