import {GraphQlMutate, GraphQlDevURI, headers} from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, term, type, timeAllotted, matchId) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $timeAllotted: Float, $matchId: String!, $type: String, $term: String) {
        editMatchingGameQuestion(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          videoIndex: $videoIndex,
          timeAllotted: $timeAllotted,
          matchId: $matchId,
          type: $type,
          term: $term) {
            ${ sharedMutationResponse }
          }
        }
    `;
  
    const editAddMatchingGameQuestionResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        timeAllotted: +timeAllotted,
        matchId: String(matchId),
        type,
        term
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, editAddMatchingGameQuestionResponseMutation, 'editMatchingGameQuestion', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};