import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';
import { sharedMutationResponse } from '../sharedMutationResponse';

export const call = async (context, i, auth) => {
  try {
    await context.setState({ sectionLoading: true });
    const deleteSectionResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteSection(courseId: "${ context.state.course._id }", sectionIndex: ${ i }) {
        ${ sharedMutationResponse }
      }
    }
  `, auth.token);
    await context.setState({ currentActiveSection: context.state.currentActiveSection === 0 ? 0 : context.state.currentActiveSection - 1});
    await updateSectionsAfterAPICall(context, deleteSectionResponse, 'deleteSection', true);
    message.success('Section deleted successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
