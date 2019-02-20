const { allCourseTypes } = require('./types/course/index');
const { allForumQuestionTypes } = require('./types/forumQuestion/index');

exports.Types = `
  ${ allCourseTypes }
  ${ allForumQuestionTypes }
`;
