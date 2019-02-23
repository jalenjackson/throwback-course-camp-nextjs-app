exports.userMutations = `
  createUser(userInput: UserInput): User
  handleBoughtCourse(courseId: String!, amountPaid: Float!): User
`;
