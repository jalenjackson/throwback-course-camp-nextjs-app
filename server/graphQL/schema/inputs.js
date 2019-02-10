const { Course } = require('./inputs/Course');
const { User } = require('./inputs/User');
const { Section } = require('./inputs/Section');
const { Video } = require('./inputs/Video');

exports.Inputs = `
  ${Course}
  ${User}
  ${Section}
  ${Video}
`;
