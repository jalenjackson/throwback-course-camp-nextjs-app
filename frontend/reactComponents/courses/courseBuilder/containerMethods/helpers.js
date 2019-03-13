export const updateSectionsAfterAPICall = (context, response, graphqlName) => {
  const course = context.state.course;
  course.sections = response.data.data[graphqlName].sections;
  context.setState({ course, sectionLoading: false });
};
