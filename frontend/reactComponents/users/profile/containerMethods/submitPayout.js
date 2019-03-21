import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';

export const call = async (context, auth, emailToSendTo, moneyAmount) => {
  if (+moneyAmount <= +auth.moneyMade && moneyAmount.trim() !== '' && +moneyAmount !== 0) {
    context.setState({ isPayingOut: true, payoutSuccess: false });
    await GraphQlMutate(GraphQlDevURI, `
      mutation {
        handlePayout(receiver: "${ emailToSendTo }", amount: ${ +moneyAmount }) {
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
    `, auth.token);
    context.setState({ isPayingOut: false, payoutSuccess: true });
    const tmpAuth = auth;
    tmpAuth.moneyMade = tmpAuth.moneyMade - moneyAmount;
    context.setState({ auth: tmpAuth });
  }
};