const Course =  require('../../../models/course');

const MongoFindCourse = async courseId => {
  try {
    const course = await Course.findById(courseId);
    return {
      ...course._doc,
      id: course.id,
    }
  } catch (e) { throw e }
};

const TransformObject = k => {
  return {
    ...k._doc,
    _id: k.id,
    course: MongoFindCourse.bind(this, k._doc.course),
  }
};

exports.MongoFindCourse = MongoFindCourse;
exports.TransformObject = TransformObject;
