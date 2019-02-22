import { GraphQlMutate, GraphQlDevURI } from '../../../../../globalHelpers/axiosCalls';
import GlobalLocalization from '../../../../../globalLocalization';
import { message } from 'antd';
import btoa from 'btoa';

export const call = async (context, props) => {
  try {
    console.log(props)
    const addNewQuestionMutation = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      createForumQuestion(
        forumQuestionInput: 
          { course: "${ props.course._id }", 
            exercise: "${ props.exercise }", 
            title: "${ context.state.title }", 
            body: "${ btoa(unescape(encodeURIComponent(context.state.body))) }", 
            sectionIndex: ${ props.sectionIndex },
            videoIndex: ${ props.videoIndex } }) {
              _id
            }
          }
  `);
    console.log(addNewQuestionMutation);
    message.success('Successfully created question');
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
  }
};
