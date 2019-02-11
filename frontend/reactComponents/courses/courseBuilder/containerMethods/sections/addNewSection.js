import { GraphQlMutate, GraphQlDevURI } from '../../../../../../globalHelpers/axiosCalls';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { updateSectionsAfterAPICall } from '../helpers';

export const call = async (context, navbarContainer) => {
  try {
    context.setState({ sectionLoading: true });
    const updateSectionResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addSectionToCourse(courseId: "${ context.state.course._id }") {
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
    updateSectionsAfterAPICall(context, navbarContainer, updateSectionResponse, 'addSectionToCourse', true);
    message.success('New section created successfully');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};

