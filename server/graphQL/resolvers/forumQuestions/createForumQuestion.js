const ForumQuestion = require('../../../models/forumQuestion');
const User = require('../../../models/user');
const { TransformObject } = require('./merge');

exports.createForumQuestion = async (args, req) => {
  try {
    const forumQuestion = new ForumQuestion({
      course: args.forumQuestionInput.course,
      title: args.forumQuestionInput.title,
      body: args.forumQuestionInput.body,
      sectionIndex: args.forumQuestionInput.sectionIndex,
      videoIndex: args.forumQuestionInput.videoIndex,
      exercise: args.forumQuestionInput.exercise
    });
    let createdForumQuestion;
    const result = await forumQuestion.save();
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
