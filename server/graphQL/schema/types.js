const { Course } = require('./types/Course');
const { User } = require('./types/User');
const { Section } = require('./types/Section');
const { Video } = require('./types/Video');
const { Quiz } = require('./types/Quiz');

exports.Types = `
  ${Course}
  ${User}
  ${Section}
  ${Video}
  ${Quiz}
`;
