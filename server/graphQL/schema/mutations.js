exports.Mutations = `
  type RootMutation {
    createCourse(courseInput: CourseInput): Course
    createUser(userInput: UserInput): User
    addSectionToCourse(courseId: String!): Course
    updateSectionDetails(courseId: String!, sectionIndex: Float!, sectionInput: SectionInput): Course
    addVideoToSection(courseId: String!, sectionIndex: Float!, videoInput: VideoInput): Course
    addQuizQuestionToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, question: String!, answers: [String]!): Course
    updateVideoDetails(courseId: String!, sectionIndex: Float!, videoIndex: Float!, videoInput: VideoInput): Course
    deleteSection(courseId: String!, sectionIndex: Float!): Course
    deleteVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, fileId: String!): Course
  }
`;
