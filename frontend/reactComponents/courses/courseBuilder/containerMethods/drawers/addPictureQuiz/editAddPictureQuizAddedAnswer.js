import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';
import { sharedMutationResponse } from '../../sharedMutationResponse';

export const call = async (context, term, type, navbarContainer, questionIterator, answerIterator) => {
  try {
    const editAddPictureQuizQuestionResponseMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      updatePictureQuizQuestion(
        courseId: "${ context.state.course._id }", 
        sectionIndex: ${ context.state.currentActiveSection }, 
        videoIndex: ${ context.state.currentActiveVideoInSection }, 
        questionIndex: ${ questionIterator }, 
        answerIndex: ${ answerIterator ? answerIterator : 0 }, 
        term: "${ term }", 
        type: "${ type }") {
          ${ sharedMutationResponse }
        }
      }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, editAddPictureQuizQuestionResponseMutation, 'updatePictureQuizQuestion', true);
    message.success(`Successfully changed picture answer`);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
