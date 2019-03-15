import { GraphQlMutate, GraphQlDevURI } from '../../../../../globalHelpers/axiosCalls';
import GlobalLocalization from '../../../../../globalLocalization';
import { message } from 'antd';
import btoa from 'btoa';

export const call = async (context, props) => {
  try {
    const addNewQuestionMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      createForumQuestion(
        forumQuestionInput: 
          { course: "${ props.course._id }", 
            exercise: "${ props.exercise }", 
            title: "${ context.state.title }",
            creator: "${ props.auth._id }",
            body: "${ btoa(unescape(encodeURIComponent(context.state.body))) }", 
            sectionIndex: ${ props.sectionIndex },
            videoIndex: ${ props.videoIndex } }) {
              _id
            }
          }
  `);
    await context.updateState('submittedQuestionId', addNewQuestionMutation.data.data.createForumQuestion._id);
    await context.updateState('visibility', false);
    await context.updateState('title', '');
    await context.updateState('body', '');
    context.updateState('successModalVisible', true);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
