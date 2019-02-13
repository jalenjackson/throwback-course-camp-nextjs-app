const { Course } = require('./inputs/Course');
const { User } = require('./inputs/User');
const { Section } = require('./inputs/Section');
const { Video } = require('./inputs/Video');
const { MatchingGameAnswer } = require('./inputs/MatchingGame/MatchingGameAnswer');
const { MatchingGameQuestion } = require('./inputs/MatchingGame/MatchingGameQuestion');
const { CodingChallenge } = require('./inputs/CodingChallenge');

exports.Inputs = `
  ${Course}
  ${User}
  ${Section}
  ${Video}
  ${MatchingGameQuestion}
  ${MatchingGameAnswer}
  ${CodingChallenge}
`;
