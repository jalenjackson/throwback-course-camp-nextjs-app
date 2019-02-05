exports.Quiz = `
  type Quiz {
    _id: ID!
    title: String!
    description: String!
    category: String!
    color: String!
    date: String!
    creator: User!
    course: Course!
    rating: Float!
    language: String!
  }
`;
