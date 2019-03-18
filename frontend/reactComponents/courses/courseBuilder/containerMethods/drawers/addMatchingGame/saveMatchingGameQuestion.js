import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, question, answer, timeAllotted, matchId) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $timeAllotted: Float!, $question: MatchingGameQuestionInput, $answer: MatchingGameAnswerInput) {
        addMatchingGameToVideo(
        courseId: $courseId,
        sectionIndex: $sectionIndex,
        videoIndex: $videoIndex,
        timeAllotted: $timeAllotted,
        question: $question,
        answer: $answer) {
          ${ sharedMutationResponse }
        }
      }
    `;
  
    const saveAddMatchingGameQuestionResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        timeAllotted: +timeAllotted,
        question: { question, matchId },
        answer: { answer, matchId }
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, saveAddMatchingGameQuestionResponseMutation, 'addMatchingGameToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};