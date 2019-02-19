import btoa from 'btoa';
import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../helpers';
import GlobalLocalization from '../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../sharedMutationResponse';

export const call = async (context, type, i, term, navbarContainer) => {
  try {
    const state = type === 'title' ? 'videoTitleTerm' : 'videoDescriptionTerm';
    await context.setState({ [state]: term, sectionLoading: true });
    const updateVideoDetailsResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      updateVideoDetails(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ i }, 
          videoInput: {${ type }: "${ type === 'description' ? btoa(unescape(encodeURIComponent(term))) : term }"}) {
            ${ sharedMutationResponse }
          }
        }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, updateVideoDetailsResponse, 'updateVideoDetails', true);
    context.setState({ sectionLoading: false });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
