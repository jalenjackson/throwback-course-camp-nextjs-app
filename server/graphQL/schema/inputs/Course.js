exports.Course = `
  input CourseInput {
    title: String!
    description: String!
    category: String!
    image: String!
    color: String!
    price: Float!
    date: String!
    rating: Float!
    language: String!
    learning: [String]!
    summary: String!
  }
`;
