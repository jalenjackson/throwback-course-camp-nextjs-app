import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, term, type, auth, questionIterator, answerIterator) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $term: String!, $questionIndex: Float!, $answerIndex: Float, $type: String!) {
        updatePictureQuizQuestion(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          videoIndex: $videoIndex,
          term: $term,
          questionIndex: $questionIndex,
          answerIndex: $answerIndex,
          type: $type) {
            ${ sharedMutationResponse }
          }
      }
    `;
  
    const editAddPictureQuizQuestionResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        term: String(term),
        questionIndex: +questionIterator,
        answerIndex: +answerIterator ? +answerIterator : 0,
        type: String(type)
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, editAddPictureQuizQuestionResponseMutation, 'updatePictureQuizQuestion', true);
    message.success(`Successfully changed picture answer`);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};