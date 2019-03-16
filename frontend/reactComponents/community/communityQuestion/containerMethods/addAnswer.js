import { GraphQlMutate, GraphQlDevURI } from "../../../../../globalHelpers/axiosCalls";
import GlobalLocalization from "../../../../../globalLocalization";
import { message } from 'antd';

export const call = async (context, auth) => {
  try {
    const addAnswerResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      addForumQuestionAnswer(forumQuestionId: "${context.state.forumQuestion._id}", answer: "${context.state.newAnswerText}") {
        _id
        title
        body
        date
        answers {
          userId {
            name
          }
          date
          answer
        }
        exercise
        sectionIndex
        videoIndex
        course {
          title
          color
          sections {
            title
            videos {
              title
            }
          }
        }
        creator {
          _id
          name
        }
      }
    }
  `, auth.token);
  
    if (addAnswerResponse.data.errors) {
      return message.error('Please login before you answer a question');
    }
    await context.setState({ forumQuestion: addAnswerResponse.data.data.addForumQuestionAnswer });
    message.success('Your answer was added successfully');
    context.setState({ newAnswerModalVisible: false });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};