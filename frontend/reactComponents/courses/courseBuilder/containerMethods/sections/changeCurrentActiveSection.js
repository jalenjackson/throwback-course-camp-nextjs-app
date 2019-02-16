export const call = (context, i, e) => {
  $('.ant-collapse-item-active').find('.ant-collapse-header').click();
  const newSection = context.state.course.sections[i];
  context.setState({
    currentActiveSection: i,
    sectionTitleTerm: newSection.title,
    sectionDescriptionTerm: atob(newSection.description),
    sectionCategoryTerm: newSection.category,
  });
  $('#build-course-section-description-text-area').froalaEditor('html.set', atob(newSection.description));

  if (e) {
    if ($(window).width() > 750) {
      const scrollTopOptions = {
        duration: 350,
        offset: e.currentTarget.querySelector('.delete-section').classList.contains('delete-section-last') ? 0 : -350
      };
      $('.scenes').scrollTo($(e.target), scrollTopOptions);
    }
  }
};
