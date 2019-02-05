exports.Mutations = `
  type RootMutation {
    createCourse(courseInput: CourseInput): Course
    createUser(userInput: UserInput): User
    createQuiz(quizInput: QuizInput): Quiz
  }
`;
