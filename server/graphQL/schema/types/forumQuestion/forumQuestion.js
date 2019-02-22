exports.ForumQuestion = `
  type ForumQuestion {
    _id: ID!
    title: String!
    body: String!
    course: Course!
    sectionIndex: Float!
    videoIndex: Float!
    exercise: String
  }
`;
