import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, term, questionIterator) => {
  try {
    const addAnotherQuizQuestionToQuizResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addAnotherQuizQuestionToQuiz(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        questionIndex: ${ questionIterator }, 
        term: "${ term }") {
          ${ sharedMutationResponse }
        }
      }
  `, auth.token);
    updateSectionsAfterAPICall(context, addAnotherQuizQuestionToQuizResponse, 'addAnotherQuizQuestionToQuiz', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
