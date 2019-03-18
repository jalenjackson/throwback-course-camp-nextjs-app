import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (e, auth, context, question, answers, optionalImage) => {
  try {
    e.preventDefault();
    const answerValuesFiltered = answers.filter((answer) => {
      return answer && answer.trim() !== '';
    });
    
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $question: String!, $answers: String!, $optionalImage: String) {
      addQuizQuestionToVideo(
        courseId: $courseId,
        sectionIndex: $sectionIndex,
        videoIndex: $videoIndex,
        question: $question,
        optionalImage: $optionalImage,
        answers: $answers) {
          ${ sharedMutationResponse }
        }
      }
    `;
  
    const saveAddQuizQuestionResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        question,
        answers: String(answerValuesFiltered),
        optionalImage
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, saveAddQuizQuestionResponseMutation, 'addQuizQuestionToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
