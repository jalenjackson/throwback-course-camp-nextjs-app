import { Container } from 'unstated'
import { Methods } from './containerMethods/index';

class ViewCourseSectionCodingChallengeContainer extends Container {
  state = {
    javascriptSandboxValue: '',
    returnValue: '',
    isEvaluating: false,
    codeOutput: '',
    codeOutputMessage: '',
    isCorrect: false,
    isError: false,
    outputModalVisibility: false,
    noOutput: false
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
  setEditorValue = (state, newValue) => Methods.setEditorValue.call(this, state, newValue);
  executeCode = () => Methods.executeCode.call(this);
}

export default ViewCourseSectionCodingChallengeContainer
