import btoa from 'btoa';
import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, navbarContainer, summary) => {
  try {
    const addCodingProjectResponseMutation = await GraphQlMutate(GraphQlDevURI, `
      mutation {
      addCodingProject(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        summary: "${ btoa(unescape(encodeURIComponent(summary))) }") {
          ${ sharedMutationResponse }
        }
      }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, addCodingProjectResponseMutation, 'addCodingProject', true);
    message.success('Successfully saved coding project!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
