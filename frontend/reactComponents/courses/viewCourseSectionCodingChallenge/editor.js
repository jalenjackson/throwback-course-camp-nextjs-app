import React from 'react';
import AceEditor from "react-ace";
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import atob from 'atob';

const Editor = props => (
  <div>
    <AceEditor
      mode="javascript"
      theme="tomorrow"
      name='coding-challenge-editor'
      onChange={ e => props.container.setEditorValue('javascriptSandboxValue', e) }
      onLoad={ () => setupCodingChallenge(props) }
      fontSize={ 16 }
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      value={ props.container.state.javascriptSandboxValue }
      highlightActiveLine={ true }
      setOptions={{ showLineNumbers: true, tabSize: 2 }} />
  </div>
);

const setupCodingChallenge = props => {
  props.container.updateState('javascriptSandboxValue', atob(props.codingChallenge.startingFunctionText));
  props.container.updateState('returnValue', props.codingChallenge.returnValue);
};

export default Editor;
