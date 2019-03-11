export const getCourseProgress = (courseId, auth, exercise, sectionIndex, videoIndex) => {
  if (auth.courseProgress) {
    const courseProgressIndex = auth.courseProgress.findIndex(course => course.courseId === courseId);
    if (courseProgressIndex > -1) {
      const courseProgress = auth.courseProgress[courseProgressIndex];
      const sectionsPlayed = JSON.parse(courseProgress.exercisesPlayed);
      const potentiallyPlayed = sectionsPlayed[`${sectionIndex}-${videoIndex}-${exercise}`];
      if (potentiallyPlayed) {
        return potentiallyPlayed
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};