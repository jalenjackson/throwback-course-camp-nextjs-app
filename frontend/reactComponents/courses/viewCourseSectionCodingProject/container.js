import { Container } from 'unstated'
import { Methods } from './containerMethods/index';

class CodingChallengeContainer extends Container {
  state = {
    htmlSandboxValue: '',
    cssSandboxValue: '',
    javascriptSandboxValue: '',
    currentSandbox: 'Task'
  };

  setEditorValue = (state, newValue) => Methods.setEditorValue.call(this, state, newValue);
  updateSandboxView = currentSandbox => Methods.updateSandboxView.call(this, currentSandbox);
  getOutput = () => Methods.getOutput.call(this);
}

export default CodingChallengeContainer
