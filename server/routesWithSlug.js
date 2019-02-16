function routesWithSlug({ server, app }) {
  server.get('/courses/build/:courseId', (req, res) => {
    const { courseId } = req.params;
    app.render(req, res, '/courses/courseBuilder', { courseId });
  });

  server.get('/courses/view/:courseId', (req, res) => {
    const { courseId } = req.params;
    app.render(req, res, '/courses/viewCourse', { courseId });
  });
}

module.exports = routesWithSlug;
