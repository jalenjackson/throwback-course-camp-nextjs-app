const { Course } = require('./types/Course');
const { User } = require('./types/User');
const { Section } = require('./types/Section');
const { Video } = require('./types/Video');
const { Quiz } = require('./types/Quiz');
const { PictureQuiz } = require('./types/PictureQuiz');
const { MatchingGame } = require('./types/MatchingGame/matchingGame');
const { MatchingGameAnswer } = require('./types/MatchingGame/matchingGameAnswer');
const { MatchingGameQuestion } = require('./types/MatchingGame/matchingGameQuestion');
const { CrunchChallenge } = require('./types/CrunchChallenge');
const { CodingChallenge } = require('./types/CodingChallenge');
const { CodingProject } = require('./types/CodingProject');

exports.Types = `
  ${Course}
  ${User}
  ${Section}
  ${Video}
  ${Quiz}
  ${PictureQuiz}
  ${MatchingGame}
  ${MatchingGameQuestion}
  ${MatchingGameAnswer}
  ${CrunchChallenge}
  ${CodingChallenge}
  ${CodingProject}
`;
