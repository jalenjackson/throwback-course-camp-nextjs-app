import btoa from 'btoa';
import { GraphQlDevURI, GraphQlMutate } from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';
import { sharedMutationResponse } from '../sharedMutationResponse';

export const call = async (context, type, state, value, navbarContainer, currentActiveSection) => {
  try {
    await context.setState({ [state]: value, sectionLoading: true });
    const updateSectionResponse = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        updateSectionDetails(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ currentActiveSection},
          sectionInput: { ${ type }: "${ type === 'description' ? btoa(unescape(encodeURIComponent(value))) : value }" }) {
            ${ sharedMutationResponse }
          }
        }
    `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, updateSectionResponse, 'updateSectionDetails', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
