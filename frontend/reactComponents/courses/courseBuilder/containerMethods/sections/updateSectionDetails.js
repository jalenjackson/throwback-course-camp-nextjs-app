import btoa from 'btoa';
import {GraphQlDevURI, GraphQlMutate, headers} from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';
import { sharedMutationResponse } from '../sharedMutationResponse';
import axios from "axios";

export const call = async (context, type, state, value, auth, currentActiveSection) => {
  try {
    await context.setState({ [state]: value, sectionLoading: true });
    
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $sectionInput: SectionInput) {
        updateSectionDetails(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          sectionInput: $sectionInput) {
            ${ sharedMutationResponse }
          }
        }
    `;
  
    const updateSectionResponse = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +currentActiveSection,
        sectionInput: { [type]: type === 'description' ? btoa(unescape(encodeURIComponent(value))) : value }
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, updateSectionResponse, 'updateSectionDetails', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
