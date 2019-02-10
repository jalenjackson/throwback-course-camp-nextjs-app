exports.User = `
  type User {
    _id: ID!
    email: String!
    name: String!
    password: String
    token: String
    createdCourses: [Course!]
  }
  
  type AuthData {
    _id: ID!
    token: String!
    tokenExpiration: Int!
    email: String!
    name: String!
  }
`;
