const Quiz =  require('../../../models/quiz');
const { TransformObject } = require('../merge');

exports.singleQuiz = async (args) => {
  try {
    const quiz = await Quiz.findById(args.quizId);
    return TransformObject(quiz);
  } catch (e) { throw e }
};
