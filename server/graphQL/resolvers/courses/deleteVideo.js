const Course =  require('../../../models/course');
const aws = require('aws-sdk');

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: 'us-east-1',
});

let s3 = new aws.S3();

exports.deleteVideo = async args => {
  try {
    console.log(args.fileId)
    s3.deleteObject({  Bucket: 'new-company-videos', Key: args.fileId }, function(err) {
      if (err) {
        console.log(err)
      }
      console.log('it deleted')
    });

    const course = await Course.findById(args.courseId);
    if (course.sections) {
      const sections = course.sections[args.sectionIndex];
      sections.videos.splice(args.videoIndex, 1);
      course.sections.set(args.sectionIndex, sections)
    } else {
      return {}
    }
    return await course.save();
  } catch (e) {
    throw e;
  }
};
