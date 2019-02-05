const Quiz =  require('../../../models/quiz');
const { TransformObject } = require('../merge');

exports.quizzes = async () => {
  try {
    const quizzes = await Quiz.find();
    return quizzes.map(quiz => {
      return TransformObject(quiz)
    });
  } catch (e) { throw e }
};
