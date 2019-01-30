const Course =  require('../../../models/course');
const { TransformCourseObject } = require('../merge');

exports.singleCourse = async (args) => {
  try {
    const course = await Course.findById(args.courseId);
    return TransformCourseObject(course);
  } catch (e) { throw e }
};
