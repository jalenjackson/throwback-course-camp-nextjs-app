import { GraphQlMutate, GraphQlDevURI } from '../../../../../../../globalHelpers/axiosCalls';
import { updateSectionsAfterAPICall } from '../../helpers';
import GlobalLocalization from '../../../../../../../globalLocalization';
import { message } from 'antd';

export const call = async (context, navbarContainer, term, questionIterator) => {
  try {
    const addAnotherPictureQuizQuestionToQuizResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addAnotherPictureQuizQuestionToQuiz(
      courseId: "${ context.state.course._id }", 
      sectionIndex: ${ context.state.currentActiveSection }, 
      videoIndex: ${ context.state.currentActiveVideoInSection }, 
      questionIndex: ${ questionIterator }, 
      term: "${ term }") {
        sections {
          title
          description
          category
          videos {
            title
            description
            videoLocation
            quiz {
              question
              answers
            }
            pictureQuiz {
              question
              answers
            }
          }
        }
      }
    }
  `, navbarContainer.state.authorizationToken);
    updateSectionsAfterAPICall(context, navbarContainer, addAnotherPictureQuizQuestionToQuizResponse, 'addAnotherPictureQuizQuestionToQuiz', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
