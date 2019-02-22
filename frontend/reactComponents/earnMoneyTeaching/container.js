import { Methods } from './containerMethods';
import { Container } from 'unstated';

class EarnMoneyTeachingContainer extends Container {
  state = {

  };

  updateState = (state, value) => Methods.updateState(this, state, value);
}

export default EarnMoneyTeachingContainer;
