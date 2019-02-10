import { GraphQlMutate, GraphQlDevURI } from '../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from './helpers';

export const call = async (context, i, navbarContainer) => {
  try {
    context.setState({ sectionLoading: true });
    const deleteSectionResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteSection(courseId: "${ context.state.course._id }", sectionIndex: ${ i }) {
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
    updateSectionsAfterAPICall(context, navbarContainer, deleteSectionResponse, 'deleteSection', true);
    message.success('Section deleted successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
