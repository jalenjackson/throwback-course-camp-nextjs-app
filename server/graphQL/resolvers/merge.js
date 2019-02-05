const User = require('../../models/user');
const Course =  require('../../models/course');
const Quiz =  require('../../models/quiz');
const { dateToString } = require('../helpers/date');

const MongoFindUser = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      id: user.id,
      password: null,
      createdCourses: MongoFindCourses.bind(this, user._doc.createdCourses),
      createdQuizzes: MongoFindQuizzes.bind(this, user._doc.createdQuizzes)
    }
  } catch (e) { throw e }
};

const MongoFindCourses = async courseIds => {
  try {
    const courses = await Course.find({ _id: { $in: courseIds }});
    return courses.map(course => {
      return TransformObject(course);
    });
  } catch (e) { throw e }
};

const MongoFindQuizzes = async quizIds => {
  try {
    const quizzes = await Quiz.find({ _id: { $in: quizIds }});
    return quizzes.map(quiz => {
      return TransformObject(quiz);
    });
  } catch (e) { throw e }
};

const MongoFindSingleCourse = async courseId => {
  try {
    const course = await Course.findById(courseId);
    return TransformCourseObject(course);
  } catch (e) { throw e }
};

const TransformObject = k => {
  return {
    ...k._doc,
    _id: k.id,
    date: dateToString(k._doc.date),
    creator: MongoFindUser.bind(this, k._doc.creator),
  }
};

exports.MongoFindUser = MongoFindUser;
exports.MongoFindCourses = MongoFindCourses;
exports.MongoFindSingleCourse = MongoFindSingleCourse;
exports.TransformObject = TransformObject;
