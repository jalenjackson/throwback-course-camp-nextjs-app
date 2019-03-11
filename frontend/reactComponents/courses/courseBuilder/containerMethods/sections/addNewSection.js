import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';
import { sharedMutationResponse } from '../sharedMutationResponse';

export const call = async (context, auth) => {
  try {
    context.setState({ sectionLoading: true });
    const updateSectionResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addSectionToCourse(courseId: "${ context.state.course._id }") {
        ${ sharedMutationResponse }
      }
    }
  `, auth.token);
    updateSectionsAfterAPICall(context, updateSectionResponse, 'addSectionToCourse', true);
    message.success('New section created successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};

