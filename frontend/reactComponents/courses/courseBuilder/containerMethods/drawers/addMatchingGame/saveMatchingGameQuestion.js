import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, auth, question, answer, timeAllotted, matchId) => {
  try {
    const saveAddMatchingGameQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addMatchingGameToVideo(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection },
      timeAllotted: ${ +timeAllotted }, 
      question: { question: "${ question }", matchId: "${ matchId }" }, 
      answer: { answer: "${ answer }", matchId: "${ matchId }" }) {
        ${ sharedMutationResponse }
      }
    }
  `, auth.token);
    updateSectionsAfterAPICall(context, saveAddMatchingGameQuestionResponseMutation, 'addMatchingGameToVideo', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
