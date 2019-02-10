import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from './helpers';

export const call = async (context, type, state, value, navbarContainer) => {
  try {
    await context.setState({ [state]: value, sectionLoading: true });
    const updateSectionResponse = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        updateSectionDetails(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ context.state.currentActiveSection },
          sectionInput: { ${ type }: "${ type === 'description' ? btoa(value) : value }" }) {
            sections {
              title
              description
              category
              videos {
                title
                description
                videoLocation
              }
            }
          }
        }
    `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, updateSectionResponse, 'updateSectionDetails', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
