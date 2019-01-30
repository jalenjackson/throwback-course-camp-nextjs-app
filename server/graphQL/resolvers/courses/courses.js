const Course =  require('../../../models/course');
const { TransformCourseObject } = require('../merge');

exports.courses = async () => {
  try {
    const courses = await Course.find();
    return courses.map(course => {
      return TransformCourseObject(course)
    });
  } catch (e) { throw e }
};
