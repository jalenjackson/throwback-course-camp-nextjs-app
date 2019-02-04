export const callSetGlobalState = async (context, localCourseState) => {
  context.setState({ ...JSON.parse(localCourseState), fileLocation: '', fileAdded: { status: false, uploaded: false }, isSavingCourse: false });
};
