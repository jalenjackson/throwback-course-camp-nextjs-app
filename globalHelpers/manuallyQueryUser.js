import { GraphQlDevURI, GraphQlMutate } from './axiosCalls';
import Cookies from 'universal-cookie';

export const manuallyQueryUser = async token => {
  const userResponse = await GraphQlMutate(GraphQlDevURI, `
    {
      getUser {
        _id
        email
        name
        token
        moneyMade
        token
        profileImage
        createdCourses {
          _id
          title
          studentsEnrolled
          price
        }
        payoutHistory {
          payoutBatchId
          emailAddressReceiver
          amount
        }
        paidCourses {
          _id
          title
          price
        }
        courseProgress {
          courseId
          exercisesPlayed
        }
      }
    }
  `, token);
  
  const userObj = userResponse.data.data.getUser;
  
  const userCookie = new Cookies();
  userCookie.set('token', userObj.token, { path: '/' });
  return userObj;
};