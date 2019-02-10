exports.returnFileLocation = (req, res) => {
  try {
    if (req.file.location) {
      res.status(200).json({
        link: req.file.location
      });
    } else {
      res.status(500).json({
        error: true
      })
    }
  } catch (e) {
    res.status(500).json({
      error: true
    })
  }
};
