export const call = (context, stateName, value) => {
  context.setState({ [stateName]: value });
};
