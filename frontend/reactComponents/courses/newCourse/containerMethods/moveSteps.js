export const callNextStep = async context => {
  try {
    await context.setState({ currentStep: context.state.currentStep + 1 });
    await localStorage.setItem('newCourseLocalState', JSON.stringify(context.state));
  } catch (e) {
    localStorage.removeItem('newCourseLocalState');
  }
};

export const callPrevStep = context => {
  context.setState({ currentStep: context.state.currentStep - 1 });
};
