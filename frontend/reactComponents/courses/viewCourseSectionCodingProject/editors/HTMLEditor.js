import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/monokai';

const HTMLEditor = props => (
  <AceEditor
    mode="html"
    theme="monokai"
    name="html-sandbox"
    onChange={ e => props.container.setEditorValue('htmlSandboxValue', e) }
    fontSize={ 14 }
    value={ props.container.state.htmlSandboxValue }
    setOptions={{ showLineNumbers: true, tabSize: 2 }} />
);

export default HTMLEditor;
