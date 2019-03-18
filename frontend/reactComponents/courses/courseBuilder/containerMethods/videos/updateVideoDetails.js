import btoa from 'btoa';
import { GraphQlDevURI, headers } from '../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../helpers';
import GlobalLocalization from '../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../sharedMutationResponse';
import axios from "axios";

export const call = async (context, type, i, term, auth) => {
  try {
    const state = type === 'title' ? 'videoTitleTerm' : 'videoDescriptionTerm';
    await context.setState({ [state]: term, sectionLoading: true });
    
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $videoInput: VideoInput) {
      updateVideoDetails(
        courseId: $courseId,
        sectionIndex: $sectionIndex,
        videoIndex: $videoIndex,
          videoInput: $videoInput) {
            ${ sharedMutationResponse }
          }
        }
    `;
  
    const updateVideoDetailsResponse = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +i,
        videoInput: { [type]: type === 'description' ? btoa(unescape(encodeURIComponent(term))) : term }
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, updateVideoDetailsResponse, 'updateVideoDetails', true);
    context.setState({ sectionLoading: false });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
