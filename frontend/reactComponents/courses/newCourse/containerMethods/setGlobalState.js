export const callSetGlobalState = async (context, localCourseState, isFromBuildCourse) => {
  if (!isFromBuildCourse) {
    context.setState({
      ...JSON.parse(localCourseState),
      fileLocation: '',
      fileAdded: {status: false, uploaded: false},
      isSavingCourse: false
    });
  } else {
    context.setState({
      title: localCourseState.title,
      description: atob(localCourseState.description),
      price: localCourseState.price,
      color: localCourseState.color,
      category: localCourseState.category,
      learning: localCourseState.learning.split(',').filter(n => n),
      language: localCourseState.language,
      summary: localCourseState.summary
    });
  }
};
