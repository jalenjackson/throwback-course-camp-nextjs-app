export const callNextStep = async (context, props) => {
  try {
    await context.setState({ currentStep: context.state.currentStep + 1 });
    if (!props.isFromBuildCourse) {
      await localStorage.setItem('newCourseLocalState', JSON.stringify(context.state));
    } else {
      if (localStorage.getItem('newCourseLocalState')) {
        localStorage.removeItem('newCourseLocalState');
      }
    }
  } catch (e) {
    localStorage.removeItem('newCourseLocalState');
  }
};

export const callPrevStep = context => {
  context.setState({ currentStep: context.state.currentStep - 1 });
};
