const Quiz =  require('../../../models/quiz');
const User =  require('../../../models/user');
const { TransformObject } = require('../merge');

exports.createQuiz = async (args, req) => {
  try {
    /*
    if (!req.isTheUserAuthenticated) {
      throw new Error('Unauthenticated!');
    }
    */
    const quiz = new Quiz({
      title: args.quizInput.title,
      description: args.quizInput.description,
      category: 'Math',
      color: 'red',
      language: 'English',
      date: new Date().toISOString(),
      rating: 0,
      creator: '5c5266c44dfc285408bcc1da',
      course: '5c5913389e15846298ddee9c'
    });
    let createdQuiz;
    const result = await quiz.save();
    createdQuiz = TransformObject(result);
    const user = await User.findById('5c5266c44dfc285408bcc1da');
    if(!user) { throw new Error('User does not exist') }
    user.createdQuizzes.push(quiz);
    await user.save();
    return createdQuiz;
  } catch (e) {
    throw e
  }
};
