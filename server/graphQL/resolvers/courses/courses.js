const Course =  require('../../../models/course');
const { TransformObject } = require('../merge');

exports.courses = async () => {
  try {
    const courses = await Course.find();
    return courses.map(course => {
      return TransformObject(course)
    });
  } catch (e) { throw e }
};
