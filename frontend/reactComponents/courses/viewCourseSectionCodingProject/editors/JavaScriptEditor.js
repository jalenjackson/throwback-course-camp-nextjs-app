import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

const JavaScriptEditor = props => (
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="javascript-sandbox"
    onChange={ e => props.container.setEditorValue('javascriptSandboxValue', e) }
    fontSize={ 14 }
    value={ props.container.state.javascriptSandboxValue }
    highlightActiveLine={ true }
    setOptions={{ showLineNumbers: true, tabSize: 2 }} />
);

export default JavaScriptEditor;
