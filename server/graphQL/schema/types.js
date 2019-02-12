const { Course } = require('./types/Course');
const { User } = require('./types/User');
const { Section } = require('./types/Section');
const { Video } = require('./types/Video');
const { Quiz } = require('./types/Quiz');
const { PictureQuiz } = require('./types/PictureQuiz');
const { MatchingGame } = require('./types/MatchingGame/matchingGame');
const { MatchingGameAnswer } = require('./types/MatchingGame/matchingGameAnswer');
const { MatchingGameQuestion } = require('./types/MatchingGame/matchingGameQuestion');

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
`;
