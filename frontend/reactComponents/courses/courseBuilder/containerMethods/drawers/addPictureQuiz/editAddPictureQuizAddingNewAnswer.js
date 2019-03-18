import {GraphQlMutate, GraphQlDevURI, headers} from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, term, questionIterator) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $questionIndex: Float!, $term: String!) {
        addAnotherPictureQuizQuestionToQuiz(
        courseId: $courseId,
        sectionIndex: $sectionIndex,
        videoIndex: $videoIndex,
        questionIndex: $questionIndex,
        term: $term) {
          ${ sharedMutationResponse }
        }
      }
    `;
  
    const addAnotherPictureQuizQuestionToQuizResponse = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        questionIndex: +questionIterator,
        term: String(term),
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, addAnotherPictureQuizQuestionToQuizResponse, 'addAnotherPictureQuizQuestionToQuiz', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};