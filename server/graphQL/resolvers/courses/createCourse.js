const Course =  require('../../../models/course');
const User =  require('../../../models/user');
const { TransformCourseObject } = require('../merge');

exports.createCourse = async (args, req) => {
  try {
    if (!req.isTheUserAuthenticated) {
      throw new Error('Unauthenticated!');
    }
    const course = new Course({
      title: args.courseInput.title,
      description: args.courseInput.description,
      category: args.courseInput.category,
      image: args.courseInput.image,
      color: args.courseInput.color,
      price: +args.courseInput.price,
      date: new Date(args.courseInput.date),
      creator: req.userId
    });
    let createdCourse;
    const result = await course.save();
    createdCourse = TransformCourseObject(result);
    const user = await User.findById(req.userId);
    if(!user) { throw new Error('User does not exist') }
    user.createdCourses.push(course);
    await user.save();
    return createdCourse;
  } catch (e) { throw e }
};
