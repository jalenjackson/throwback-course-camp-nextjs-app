import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, question, answers) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $question: String!, $answers: String!) {
        addPictureQuizQuestionToVideo(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          videoIndex: $videoIndex,
          question: $question,
          answers: $answers) {
            ${ sharedMutationResponse }
          }
        }
    `;
  
    const saveAddPictureQuizQuestionResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        question,
        answers: String(answers),
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, saveAddPictureQuizQuestionResponseMutation, 'addPictureQuizQuestionToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};