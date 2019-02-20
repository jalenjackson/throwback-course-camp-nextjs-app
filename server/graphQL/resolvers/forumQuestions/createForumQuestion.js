const ForumQuestion = require('../../../models/forumQuestion');
const User = require('../../../models/user');
const { TransformObject } = require('./merge');

exports.createForumQuestion = async (args, req) => {
  try {
    const forumQuestion = new ForumQuestion({
      title: args.forumQuestionInput.title,
      body: args.forumQuestionInput.body,
      course: args.courseId,
    });
    let createdForumQuestion;
    const result = await forumQuestion.save();
    console.log(result._doc)
    createdForumQuestion = TransformObject(result);
    const user = await User.findById('5c5266c44dfc285408bcc1da');
    if(!user) { throw new Error('User does not exist') }
    user.createdForumQuestions.push(forumQuestion);
    await user.save();
    return createdForumQuestion;
  } catch (e) {
    throw e
  }
};
