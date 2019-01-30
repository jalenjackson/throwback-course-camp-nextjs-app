exports.Queries = `
  type RootQuery {
    courses: [Course!]!
    singleCourse(courseId: String!): Course!
    login(email: String!, password: String!): AuthData!
  }
`;
