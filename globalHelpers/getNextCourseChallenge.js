export const getNextChallenge = props => {
  if (props.currentVideo.quiz) {
    return {
      type: 'quiz',
      route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/quiz`,
      text: 'Take Quiz'
    }
  }
  
  else if (props.currentVideo.pictureQuiz) {
    return {
      type: 'pictureQuiz',
      route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/picture-quiz`,
      text: 'Take Picture Quiz'
    }
  }
  
  else if (props.currentVideo.matchingGame) {
    return {
      type: 'matchingGame',
      route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/matching-game`,
      text: 'Take Matching Game'
    }
  }
  
  else if (props.currentVideo.crunchChallenge) {
    return {
      type: 'crunchChallenge',
      route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/crunch-challenge`,
      text: 'Take Crunch Challenge'
    }
  }
  
  else if (props.currentVideo.codingChallenge) {
    return {
      type: 'codingChallenge',
      route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/coding-challenge`,
      text: 'Take Coding Challenge'
    }
  }
  
  else if (props.currentVideo.codingProject) {
    return {
      type: 'codingProject',
      route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/coding-project`,
      text: 'Take Coding Project'
    }
  }
  
  else {
    if ((+props.videoIndex + 1) === props.course.sections[props.sectionIndex].videos.length) {
      if ((+props.sectionIndex + 1) === props.course.sections.length) {
        return {
          type: 'endCourse',
          route: `/courses/view/${ props.course._id }/end-course`,
          text: 'Course Completion'
        }
      } else {
        return {
          type: 'video',
          route: `/courses/view/${ props.course._id }/${ (+props.sectionIndex + 1) }/0`,
          text: 'Next Video'
        }
      }
    } else {
      return {
        type: 'video',
        route: `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ (+props.videoIndex + 1) }`,
        text: 'Next Video'
      }
    }
  }
};

