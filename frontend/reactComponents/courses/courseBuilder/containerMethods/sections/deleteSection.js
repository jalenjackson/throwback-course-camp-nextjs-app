import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';

export const call = async (context, i, navbarContainer) => {
  try {
    await context.setState({ sectionLoading: true });
    const deleteSectionResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      deleteSection(courseId: "${ context.state.course._id }", sectionIndex: ${ i }) {
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
            matchingGame {
              questions {
                question
                matchId
              }
              answers {
                answer
                matchId
              }
            }
          }
        }
      }
    }
  `, navbarContainer.state.authorizationToken);
    await context.setState({ currentActiveSection: context.state.currentActiveSection === 0 ? 0 : context.state.currentActiveSection - 1});
    console.log(context.state.currentActiveSection);
    await updateSectionsAfterAPICall(context, navbarContainer, deleteSectionResponse, 'deleteSection', true);
    message.success('Section deleted successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
