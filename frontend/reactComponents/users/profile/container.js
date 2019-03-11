import { Container } from 'unstated';
import { Methods } from './containerMethods';

export default class ProfileContainer extends Container {
  state = {
    menuKey: 'profile',
    transferFundsAmount: '',
    transferFundsErrorMessage: '',
    isPayingOut: false,
    payoutSuccess: false,
    auth: false
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
  submitPayout = (auth, emailToSendTo, moneyAmount) => Methods.submitPayout.call(this, auth, emailToSendTo, moneyAmount);
  uploadProfileImage = profileImage => Methods.uploadProfileImage.call(this, profileImage);
}