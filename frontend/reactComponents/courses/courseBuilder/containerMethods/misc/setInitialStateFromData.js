export const call = (context, course) => {
  const firstSection = course.sections[0];
  context.setState({
    course,
    sectionTitleTerm: firstSection ? firstSection.title : '',
    sectionDescriptionTerm: firstSection ? atob(firstSection.description) : '',
    sectionCategoryTerm: firstSection ? firstSection.category : '',
    currentVideoLocation: firstSection && firstSection.videos && firstSection.videos.length > 0 ? firstSection.videos[0].videoLocation : ''
  });
};
