import { updateCourse } from '../updateCourse';

export const callRemoveNewLearning = (context, props, removedLearning) => {
  let learning = context.state.learning.filter(learning => learning !== removedLearning);
  if (removedLearning.trim() === '') learning = [];
  context.setState({ learning });

  if (props.isFromBuildCourse) updateCourse(props, 'learning', learning);
};
