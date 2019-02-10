export const call = (context, course) => {
  const firstSection = course.sections[0];
  context.setState({
    course,
    sectionTitleTerm: firstSection.title,
    sectionDescriptionTerm: atob(firstSection.description),
    sectionCategoryTerm: firstSection.category,
  });
};
