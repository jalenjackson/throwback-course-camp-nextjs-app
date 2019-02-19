export const sharedMutationResponse = `
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
