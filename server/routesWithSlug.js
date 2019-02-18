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
}

module.exports = routesWithSlug;
