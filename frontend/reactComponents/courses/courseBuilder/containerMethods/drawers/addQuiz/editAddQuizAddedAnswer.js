import {GraphQlMutate, GraphQlDevURI, headers} from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, term, type, auth, questionIterator, answerIterator, optionalImage) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $term: String!, $optionalImage: String, $questionIndex: Float!, $answerIndex: Float, $type: String!) {
        updateQuizQuestion(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          videoIndex: $videoIndex,
          term: $term,
          optionalImage: $optionalImage,
          questionIndex: $questionIndex,
          answerIndex: $answerIndex,
          type: $type) {
            ${ sharedMutationResponse }
          }
      }
    `;
  
    const editAddQuizQuestionResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        term: String(term),
        optionalImage: String(optionalImage),
        questionIndex: +questionIterator,
        answerIndex: +answerIterator ? +answerIterator : 0,
        type: String(type)
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, editAddQuizQuestionResponseMutation, 'updateQuizQuestion', true);
    message.success(`Successfully changed answer to ${ String(term) }`);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};

