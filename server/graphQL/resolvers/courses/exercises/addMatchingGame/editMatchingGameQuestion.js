const Course =  require('../../../../../models/course');
const { TransformObject } = require('../../../merge');

exports.editMatchingGameQuestion = async (args, req) => {
  try {
    const course = await Course.findById(args.courseId);
    const section = course.sections[args.sectionIndex];
    const video = section.videos[args.videoIndex];
    const isTypeAnswer = args.type === 'Answer';

    video.matchingGame[isTypeAnswer ? 'answers' : 'questions'].find((obj) => {
      return obj.matchId === args.matchId;
    })[isTypeAnswer ? 'answer' : 'question'] = args.term;

    section.videos[args.videoIndex] = video;
    course.sections.set(args.sectionIndex, section);

    const result = await course.save();
    return TransformObject(result);
  } catch (e) {
    throw e;
  }
};
