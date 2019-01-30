const User = require('../../models/user');
const Course =  require('../../models/course');
const { dateToString } = require('../helpers/date');

const MongoFindUser = async userId => {
  try {
    const user = await User.findById(userId);
    return { ...user._doc, id: user.id, password: null, createdCourses: MongoFindCourses.bind(this, user._doc.createdCourses) }
  } catch (e) { throw e }
};

const MongoFindCourses = async courseIds => {
  try {
    const courses = await Course.find({ _id: { $in: courseIds }});
    return courses.map(course => {
      return TransformCourseObject(course);
    });
  } catch (e) { throw e }
};

const MongoFindSingleCourse = async courseId => {
  try {
    const course = await Course.findById(courseId);
    return TransformCourseObject(course);
  } catch (e) { throw e }
};

const TransformCourseObject = course => {
  return {
    ...course._doc,
    _id: course.id,
    date: dateToString(course._doc.date),
    creator: MongoFindUser.bind(this, course._doc.creator),
  }
};

exports.MongoFindUser = MongoFindUser;
exports.MongoFindCourses = MongoFindCourses;
exports.MongoFindSingleCourse = MongoFindSingleCourse;
exports.TransformCourseObject = TransformCourseObject;
