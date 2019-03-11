import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (e, auth, context, question, answers, optionalImage) => {
  try {
    e.preventDefault();
    const answerValuesFiltered = answers.filter((answer) => {
      return answer && answer.trim() !== '';
    });
    
    const saveAddQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addQuizQuestionToVideo(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        question: "${ question }", 
        optionalImage: "${ optionalImage }",
        answers: "${ answerValuesFiltered }") {
          ${ sharedMutationResponse }
        }
      }
  `, auth.token);
    updateSectionsAfterAPICall(context, saveAddQuizQuestionResponseMutation, 'addQuizQuestionToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
