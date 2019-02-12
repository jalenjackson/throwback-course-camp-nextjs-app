exports.Mutations = `
  type RootMutation {
    createCourse(courseInput: CourseInput): Course
    
    createUser(userInput: UserInput): User
    
    addPictureQuizQuestionToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, question: String!, answers: String!): Course    
    deleteAddPictureQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!): Course
    updatePictureQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, term: String!, questionIndex: Float!, answerIndex: Float, type: String!): Course
    addAnotherPictureQuizQuestionToQuiz(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!, term: String!): Course
    
    addQuizQuestionToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, question: String!, answers: String!): Course    
    deleteAddQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!): Course    
    updateQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, term: String!, questionIndex: Float!, answerIndex: Float, type: String!): Course
    addAnotherQuizQuestionToQuiz(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!, term: String!): Course
    
    updateSectionDetails(courseId: String!, sectionIndex: Float!, sectionInput: SectionInput): Course
    deleteSection(courseId: String!, sectionIndex: Float!): Course
    addSectionToCourse(courseId: String!): Course

    addVideoToSection(courseId: String!, sectionIndex: Float!, videoInput: VideoInput): Course    
    updateVideoDetails(courseId: String!, sectionIndex: Float!, videoIndex: Float!, videoInput: VideoInput): Course    
    deleteVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, fileId: String!): Course
    
    addMatchingGameToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, question: MatchingGameQuestionInput, answer: MatchingGameAnswerInput): Course
    deleteMatchingGameQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, matchId: String!): Course
    editMatchingGameQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, matchId: String!, type: String!, term: String!): Course
  }
`;
