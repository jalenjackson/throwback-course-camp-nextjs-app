exports.verify = (req, res, next) => {
  console.log(req.headers)
  console.log(req.isTheUserAuthenticated)
  if (req.isTheUserAuthenticated) {
    return next();
  } else {
    res.status(409).json({
      unauthenticated: true
    });
  }
};
