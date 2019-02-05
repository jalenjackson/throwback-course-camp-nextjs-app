exports.Queries = `
  type RootQuery {
    courses: [Course!]!
    singleCourse(courseId: String!): Course!
    singleQuiz(quizId: String!): Quiz!
    login(email: String!, password: String!): AuthData!
    globalAutocomplete(term: String!): [Course!]!
    quizzes: [Quiz!]!
  }
`;
