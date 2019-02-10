export const call = (context, i) => {
  $('.ant-collapse-item-active').find('.ant-collapse-header').click();
  const newSection = context.state.course.sections[i];
  context.setState({
    currentActiveSection: i,
    sectionTitleTerm: newSection.title,
    sectionDescriptionTerm: atob(newSection.description),
    sectionCategoryTerm: newSection.category,
  });
  $('#build-course-section-description-text-area').froalaEditor('html.set', atob(newSection.description));
};
