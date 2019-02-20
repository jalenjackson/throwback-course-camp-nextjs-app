function routesWithSlug({ server, app }) {
  server.get('/courses/build/:courseId', (req, res) => {
    const { courseId } = req.params;
    app.render(req, res, '/courses/courseBuilder', { courseId });
  });

  server.get('/courses/view/:courseId', (req, res) => {
    const { courseId } = req.params;
    app.render(req, res, '/courses/viewCourse', { courseId });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionVideo', { courseId, sectionIndex, videoIndex });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex/quiz', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionQuiz', { courseId, sectionIndex, videoIndex });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex/picture-quiz', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionPictureQuiz', { courseId, sectionIndex, videoIndex });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex/matching-game', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionMatchingGame', { courseId, sectionIndex, videoIndex });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex/crunch-challenge', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionCrunchChallenge', { courseId, sectionIndex, videoIndex });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex/coding-project', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionCodingProject', { courseId, sectionIndex, videoIndex });
  });

  server.get('/courses/view/:courseId/:sectionIndex/:videoIndex/coding-challenge', (req, res) => {
    const { courseId, sectionIndex, videoIndex } = req.params;
    app.render(req, res, '/courses/viewCourseSectionCodingChallenge', { courseId, sectionIndex, videoIndex });
  });
}

module.exports = routesWithSlug;
