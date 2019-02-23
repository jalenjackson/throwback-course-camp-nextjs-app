import { Container } from 'unstated';
import { Methods } from './containerMethods';

export default class ProfileContainer extends Container {
  state = {
    menuKey: 'profile'
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
}