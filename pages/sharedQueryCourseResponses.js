export const courseResponse = `
  _id
  color
  title
  description
  summary
  price
  learning
  language
  category
  rating
  date
  status
  creator {
    _id
    name
  }
  sections {
    title
    description
    category
    videos {
      title
      description
      videoLocation
      quiz {
        question
        answers
        optionalImage
      }
      pictureQuiz {
        question
        answers
      }
      matchingGame {
        questions {
          question
          matchId
        }
        timeAllotted
        answers {
          answer
          matchId
        }
      }
      crunchChallenge {
        target
        definitions
      }
      codingChallenge {
        title
        description	
        functionName
        functionParams
        addedFunctionParams
        startingFunctionText
        returnValue
      }
      codingProject {
        summary
      }
    }
  }
`;

export const courseSections = `
  sections {
    title
    description
    category
    videos {
      title
      description
      videoLocation
      quiz {
        question
        answers
        optionalImage
      }
      pictureQuiz {
        question
        answers
      }
      matchingGame {
        questions {
          question
          matchId
        }
        timeAllotted
        answers {
          answer
          matchId
        }
      }
      crunchChallenge {
        target
        definitions
      }
      codingChallenge {
        title
        description	
        functionName
        functionParams
        addedFunctionParams
        startingFunctionText
        returnValue
      }
      codingProject {
        summary
      }
    }
  }
`;
