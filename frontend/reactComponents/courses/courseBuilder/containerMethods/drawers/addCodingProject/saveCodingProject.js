import btoa from 'btoa';
import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, summary) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $summary: String!) {
      addCodingProject(
        courseId: $courseId,
        sectionIndex: $sectionIndex,
        videoIndex: $videoIndex,
        summary: $summary) {
          ${ sharedMutationResponse }
        }
      }
    `;
    
    const addCodingProjectResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        summary: btoa(unescape(encodeURIComponent(summary)))
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, addCodingProjectResponseMutation, 'addCodingProject', true);
    message.success('Successfully saved coding project!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
