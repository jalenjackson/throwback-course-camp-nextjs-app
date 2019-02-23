const { createUser, login } = require('./auth');
const { handleBoughtCourse } = require('./handleBoughtCourse');

module.exports = {
  handleBoughtCourse,
  createUser,
  login
};