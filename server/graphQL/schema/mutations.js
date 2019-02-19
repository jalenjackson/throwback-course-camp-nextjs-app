exports.Mutations = `
  type RootMutation {
    createCourse(courseInput: CourseInput): Course
    updateCourse(courseId: String!, courseInput: CourseInput): Course
    
    createUser(userInput: UserInput): User
    
    addPictureQuizQuestionToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, question: String!, answers: String!): Course    
    deleteAddPictureQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!): Course
    updatePictureQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, term: String!, questionIndex: Float!, answerIndex: Float, type: String!): Course
    addAnotherPictureQuizQuestionToQuiz(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!, term: String!): Course
    
    addQuizQuestionToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, question: String!, answers: String!, optionalImage: String): Course    
    deleteAddQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!): Course    
    updateQuizQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, term: String!, optionalImage: String, questionIndex: Float!, answerIndex: Float, type: String!): Course
    addAnotherQuizQuestionToQuiz(courseId: String!, sectionIndex: Float!, videoIndex: Float!, questionIndex: Float!, term: String!): Course
    
    updateSectionDetails(courseId: String!, sectionIndex: Float!, sectionInput: SectionInput): Course
    deleteSection(courseId: String!, sectionIndex: Float!): Course
    addSectionToCourse(courseId: String!): Course

    addVideoToSection(courseId: String!, sectionIndex: Float!, videoInput: VideoInput): Course    
    updateVideoDetails(courseId: String!, sectionIndex: Float!, videoIndex: Float!, videoInput: VideoInput): Course    
    deleteVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, fileId: String!): Course
    
    addMatchingGameToVideo(courseId: String!, sectionIndex: Float!, videoIndex: Float!, timeAllotted: Float!, question: MatchingGameQuestionInput, answer: MatchingGameAnswerInput): Course
    deleteMatchingGameQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, matchId: String!): Course
    editMatchingGameQuestion(courseId: String!, sectionIndex: Float!, videoIndex: Float!, timeAllotted: Float, matchId: String!, type: String, term: String): Course
    
    addCrunchChallenge(courseId: String!, sectionIndex: Float!, videoIndex: Float!, target: String!, definitions: String!): Course
    
    addCodingChallenge(courseId: String!, sectionIndex: Float!, videoIndex: Float!, codingChallengeInput: CodingChallengeInput): Course
    
    addCodingProject(courseId: String!, sectionIndex: Float!, videoIndex: Float!, summary: String!): Course
    
    deleteExercise(courseId: String!, sectionIndex: Float!, videoIndex: Float!, key: String!): Course
  }
`;
