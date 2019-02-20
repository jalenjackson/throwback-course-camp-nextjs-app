export const call = (context, state, newValue) => {
  context.setState({[state]: newValue});
};
