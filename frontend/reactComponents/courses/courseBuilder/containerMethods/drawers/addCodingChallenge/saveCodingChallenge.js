import btoa from 'btoa';
import { GraphQlDevURI, headers } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';
import axios from "axios";

export const call = async (context, auth, title, description, functionText, returnValue, functionName, functionParams, addedParams) => {
  try {
    const query = `
      mutation($courseId: String!, $sectionIndex: Float!, $videoIndex: Float!, $codingChallengeInput: CodingChallengeInput) {
        addCodingChallenge(
          courseId: $courseId,
          sectionIndex: $sectionIndex,
          videoIndex: $videoIndex,
          codingChallengeInput: $codingChallengeInput) {
              ${ sharedMutationResponse }
            }
          }
    `;
  
    const addCodingChallengeResponseMutation = await axios.post(GraphQlDevURI, JSON.stringify({
      query,
      variables: {
        courseId: String(context.state.course._id),
        sectionIndex: +context.state.currentActiveSection,
        videoIndex: +context.state.currentActiveVideoInSection,
        codingChallengeInput:
          {
            title,
            description: btoa(unescape(encodeURIComponent(description))),
            startingFunctionText: btoa(unescape(encodeURIComponent(functionText))),
            returnValue,
            functionName,
            functionParams,
            addedFunctionParams: addedParams
          }
      }
    }), { headers: headers(auth.token) });
    
    updateSectionsAfterAPICall(context, addCodingChallengeResponseMutation, 'addCodingChallenge', true);
    message.success('Successfully saved coding challenge!')
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};