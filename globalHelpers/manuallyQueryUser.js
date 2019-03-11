import { GraphQlDevURI, GraphQlMutate } from './axiosCalls';
import Cookies from 'universal-cookie';

export const manuallyQueryUser = async auth => {
  const userResponse = await GraphQlMutate(GraphQlDevURI, `
    {
      getUser {
        _id
        email
        name
        token
        moneyMade
        profileImage
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
  `, auth.token);
  
  const userObj = userResponse.data.data.getUser;
  userObj.token = auth.token;
  
  const userCookie = new Cookies();
  userCookie.set('auth', userObj, { path: '/' });
  console.log(userObj)
  return userObj;
};