import { Container } from 'unstated';
import { Methods } from './containerMethods';

export default class ProfileContainer extends Container {
  state = {
    currentMenuItem: 'about',
    menuCollapsed: false
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
  submitPayout = (auth, emailToSendTo, moneyAmount) => Methods.submitPayout.call(this, auth, emailToSendTo, moneyAmount);
  uploadProfileImage = profileImage => Methods.uploadProfileImage.call(this, profileImage);
  updateUserInformation = (name, email) => Methods.updateUserInformation.call(this, name, email)
}