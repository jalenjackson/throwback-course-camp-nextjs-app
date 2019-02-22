const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes
  .add('earnMoneyTeaching', '/teach')
  .add('courses/viewCourse', '/courses/view/:courseId')
  .add('courses/newCourse', '/courses/new')
  .add('courses/courseBuilder', '/courses/build/:courseId')
  .add('courses/viewCourseSectionVideo', '/courses/view/:courseId/:sectionIndex/:videoIndex')
  .add('courses/viewCourseSectionQuiz', '/courses/view/:courseId/:sectionIndex/:videoIndex/quiz')
  .add('courses/viewCourseSectionPictureQuiz', '/courses/view/:courseId/:sectionIndex/:videoIndex/picture-quiz')
  .add('courses/viewCourseSectionMatchingGame', '/courses/view/:courseId/:sectionIndex/:videoIndex/matching-game')
  .add('courses/viewCourseSectionCrunchChallenge', '/courses/view/:courseId/:sectionIndex/:videoIndex/crunch-challenge')
  .add('courses/viewCourseSectionCodingProject', '/courses/view/:courseId/:sectionIndex/:videoIndex/coding-project')
  .add('courses/viewCourseSectionCodingChallenge', '/courses/view/:courseId/:sectionIndex/:videoIndex/coding-challenge')
  .add('community/community', '/community')
  .add('community/communityQuestion', '/community/:questionId')
  .add('user/profile', '/profile')
  .add('courses/courseCategories', '/courses/:category');
