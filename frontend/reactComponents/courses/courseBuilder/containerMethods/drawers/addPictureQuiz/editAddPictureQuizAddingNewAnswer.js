import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, term, questionIterator) => {
  try {
    const addAnotherPictureQuizQuestionToQuizResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addAnotherPictureQuizQuestionToQuiz(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection }, 
      questionIndex: ${ questionIterator }, 
      term: "${ term }") {
        ${ sharedMutationResponse }
      }
    }
  `, auth.token);
    updateSectionsAfterAPICall(context, addAnotherPictureQuizQuestionToQuizResponse, 'addAnotherPictureQuizQuestionToQuiz', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
