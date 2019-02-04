export const callAddNewLearning = (context, e) => {
  console.log(e.target.value)
  if ((e.key === 'Enter' || e === 'Enter') && context.state.learningTerm !== '') {
    const learning = context.state.learning;
    learning.push(e === 'Enter' ? context.state.learningTerm : e.target.value);
    context.setState({ learning, learningTerm: '' });
  }
};
