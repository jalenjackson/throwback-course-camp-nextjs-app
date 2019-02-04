export const callRemoveNewLearning = (context, removedLearning) => {
  const learning = context.state.learning.filter(learning => learning !== removedLearning);
  context.setState({ learning });
};
