exports.Course = `
  type Course {
    _id: ID!
    title: String!
    description: String!
    category: String!
    image: String!
    color: String!
    price: Float!
    date: String!
    creator: User!
  }
`;
