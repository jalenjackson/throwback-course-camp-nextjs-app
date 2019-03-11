import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';

export const call = async (context, auth, emailToSendTo, moneyAmount) => {
  if (+moneyAmount <= +auth.moneyMade && moneyAmount.trim() !== '') {
    context.setState({ isPayingOut: true, payoutSuccess: false });
    await GraphQlMutate(GraphQlDevURI, `
      mutation {
        handlePayout(receiver: "${ emailToSendTo }", amount: ${ +moneyAmount }) {
          moneyMade
        }
      }
    `, auth.token);
    context.setState({ isPayingOut: false, payoutSuccess: true });
    const tmpAuth = auth;
    tmpAuth.moneyMade = tmpAuth.moneyMade - moneyAmount;
    context.setState({ auth: tmpAuth });
  }
};