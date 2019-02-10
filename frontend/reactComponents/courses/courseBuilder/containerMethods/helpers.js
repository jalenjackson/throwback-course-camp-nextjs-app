import { handleUnauthenticatedButFrontEndThinksWeAre } from '../../../../../globalHelpers/handleUnauthenticatedButFrontEndThinksWeAre';

export const updateSectionsAfterAPICall = (context, navbarContainer, response, graphqlName, withCheckAuthentication) => {
  if (response.data.errors && withCheckAuthentication) {
    return handleUnauthenticatedButFrontEndThinksWeAre(navbarContainer);
  }
  const course = context.state.course;
  course.sections = response.data.data[graphqlName].sections;
  context.setState({ course, sectionLoading: false });
};
