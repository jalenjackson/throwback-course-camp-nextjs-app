export const getTotalCoursePoints = course => {
  let courseScore = 0;
  course.sections.map(section => {
    section.videos.map(video => {
      if (video.quiz) courseScore += 10;
      if (video.pictureQuiz) courseScore += 10;
      if (video.matchingGame) courseScore += 10;
      if (video.codingChallenge) courseScore += 10;
      if (video.codingProject) courseScore += 10;
      if (video.crunchChallenge) courseScore += 10;
    })
  });
  
  return courseScore;
};

export const getTotalUserCoursePoints = (courseId, auth) => {
  const courseProgressIndex = auth.courseProgress.findIndex(course => course.courseId === courseId);
  if (courseProgressIndex > -1) {
    const exercisesPlayed = JSON.parse(auth.courseProgress[courseProgressIndex].exercisesPlayed);
    return verifyScore(exercisesPlayed);
  } else {
    return 0;
  }
};

const verifyScore = exercisesPlayed => {
  let userPoints = 0;
  Object.keys(exercisesPlayed).map(key => {
    if (exercisesPlayed[key] === 'Completed') return userPoints += 10;
    if (exercisesPlayed[key].split('/')[0] === exercisesPlayed[key].split('/')[1]) return userPoints += 10;
  });
  
  return userPoints;
};