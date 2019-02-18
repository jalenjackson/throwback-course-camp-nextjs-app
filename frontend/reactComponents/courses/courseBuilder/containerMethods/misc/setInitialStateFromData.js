export const call = (context, course) => {
  const firstSection = course.sections[0];
  context.setState({
    course,
    sectionTitleTerm: firstSection ? firstSection.title : '',
    sectionDescriptionTerm: firstSection ? atob(firstSection.description) : '',
    sectionCategoryTerm: firstSection ? firstSection.category : '',
    currentVideoLocation: firstSection && firstSection.videos && firstSection.videos.length > 0 ? firstSection.videos[0].videoLocation : '',
    courseStatusText: setCourseStatusText(course),
    courseColor: course.color
  });
};

export const setCourseStatusText = course => {
  switch (course.status) {
    case 'Unpublished': {
      return 'Submit Course For Review'
    }
    case 'Reviewing': {
      return 'We are in the process of reviewing your course! We will get back to you soon!'
    }
    case 'Published': {
      return 'Your course is live and published in the marketplace!'
    }
  }
};
