import { GraphQlMutate, GraphQlDevURI } from '../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from './helpers';
import GlobalLocalization from '../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from './sharedMutationResponse';

export const call = async (context, navbarContainer, key) => {
  try {
    const removeExerciseResponseMutation = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        deleteExercise(
          courseId: "${ context.state.course._id }", 
          sectionIndex: ${ context.state.currentActiveSection }, 
          videoIndex: ${ context.state.currentActiveVideoInSection }, 
          key: "${ key }") {
            ${ sharedMutationResponse }
          }
        }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, removeExerciseResponseMutation, 'deleteExercise', true);
    context.setState({ sectionLoading: false });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
