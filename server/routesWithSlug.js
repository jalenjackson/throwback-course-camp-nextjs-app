function routesWithSlug({ server, app }) {
  server.get('/courses/build/:courseId', (req, res) => {
    const { courseId } = req.params;
    app.render(req, res, '/courses/courseBuilder', { courseId });
  });
}

module.exports = routesWithSlug;
