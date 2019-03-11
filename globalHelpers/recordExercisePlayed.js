import { GraphQlMutate, GraphQlDevURI } from "./axiosCalls";
import Cookies from "universal-cookie";

export const recordExercisePlayed = async (courseId, exercise, score, sectionIndex, videoIndex, auth) => {
  const recordExercisePlayedResponse = await GraphQlMutate(GraphQlDevURI, `
    mutation {
      recordExercisePlayed(
        courseId: "${ courseId }",
        exercise: "${ exercise }",
        score: "${ score }",
        sectionIndex: ${ sectionIndex },
        videoIndex: ${ videoIndex }) {
          _id
          email
          name
          token
          moneyMade
          paidCourses {
            _id
          }
          courseProgress {
            courseId
            exercisesPlayed
          }
        }
    }
  `, auth.token);
  
  const userCookie = new Cookies();
  userCookie.set('auth', recordExercisePlayedResponse.data.data.recordExercisePlayed, { path: '/' });
};