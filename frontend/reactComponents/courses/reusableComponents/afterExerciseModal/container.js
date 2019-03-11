import { Container } from 'unstated';
import { Methods } from './containerMethods/index'

class AfterExerciseModalContainer extends Container {
  state = {
    winModalVisible: false,
    loseModalVisible: false
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default AfterExerciseModalContainer;
