import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, term, type, auth, questionIterator, answerIterator, optionalImage) => {
  try {
    const editAddQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      updateQuizQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        questionIndex: ${ questionIterator }, 
        answerIndex: ${ answerIterator ? answerIterator : 0 }, 
        term: "${ term }", 
        optionalImage: "${ optionalImage }",
        type: "${ type }") {
          ${ sharedMutationResponse }
        }
      }
  `, auth.token);
    updateSectionsAfterAPICall(context, editAddQuizQuestionResponseMutation, 'updateQuizQuestion', true);
    message.success(`Successfully changed answer to ${ String(term) }`);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
