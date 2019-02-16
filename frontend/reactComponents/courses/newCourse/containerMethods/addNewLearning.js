import {updateCourse} from "../updateCourse";

export const callAddNewLearning = (context, props, e) => {
  if ((e.key === 'Enter' || e === 'Enter') && context.state.learningTerm !== '') {
    const learning = context.state.learning;
    learning.push(e === 'Enter' ? context.state.learningTerm : e.target.value);
    context.setState({ learning, learningTerm: '' });
    if (props.isFromBuildCourse) updateCourse(props, 'learning', learning);
  }
};
