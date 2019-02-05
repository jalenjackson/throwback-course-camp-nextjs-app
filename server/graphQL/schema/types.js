const { Course } = require('./types/Course');
const { User } = require('./types/User');
const { Quiz } = require('./types/Quiz');

exports.Types = `
  ${Course}
  ${User}
  ${Quiz}
`;
