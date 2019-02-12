import LocalizedStrings from 'react-localization';

let localization = new LocalizedStrings({
  en:{
    Home: 'Course Camp',
    MenuLinks: {
      LearnAndPractice: 'Learn And Practice',
      Learn: 'Learn',
      Courses: 'Courses',
      AllCourses: 'All courses',
      Categories: 'Categories',
      Community: 'Community',
      Practice: 'Practice',
      Quizzes: 'Quizzes',
      AllQuizzes: 'All Quizzes',
      PictureQuizzes: 'Picture Quizzes',
      MatchingGames: 'Matching Games',
      CrunchChallenges: 'CrunchChallenges',
      CodingChallenges: 'CodingChallenges',
      CodingProjects: 'CodingProjects',
      EarnMoneyTeaching: 'Earn Money Teaching',
      Register: 'Register',
      Login: 'Login'
    },
    MenuKeys: {
      Home: 'home',
      Courses: 'courses',
      CourseCategories: 'courseCategories',
      Community: 'community',
      Quizzes: 'quizzes',
      QuizCategories: 'quizCategories',
      PictureQuizzes: 'pictureQuizzes',
      PictureQuizCategories: 'pictureQuizCategories',
      MatchingGames: 'matchingGames',
      MatchingGameCategories: 'matchingGameCategories',
      CrunchChallenges: 'crunchChallenges',
      CrunchChallengeCategories: 'crunchChallengeCategories',
      CodingChallenges: 'codingChallenges',
      CodingChallengeCategories: 'codingChallengeCategories',
      CodingProjects: 'codingProjects',
      CodingProjectCategories: 'codingProjectCategories',
      BecomeATeacher: 'becomeTeacher',
      Register: 'register',
      Login: 'login'
    },
    Search: {
      Placeholder: 'Search For A Course...'
    },
    NavbarContainer: {
      InvalidAuthorization: 'Invalid Authorization',
      UnexpectedError: 'Sorry an unexpected error occurred. We are working diligently to get this resolved.',
      EnterValidEmailAddress: 'Please enter a valid email address',
      FillInFieldsError: 'Please make sure all fields are filled in',
      SignOutQuote: 'Signing you out',
      SignOutFinished: 'You are now signed out.'
    }
  },
});

export default localization;
