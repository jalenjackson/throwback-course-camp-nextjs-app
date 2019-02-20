import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/monokai';
import 'brace/mode/css';

const CSSEditor = props => (
  <AceEditor
    mode="css"
    theme="monokai"
    name="css-sandbox"
    onChange={ e => props.container.setEditorValue('cssSandboxValue', e) }
    fontSize={ 14 }
    value={ props.container.state.cssSandboxValue }
    highlightActiveLine={true}
    setOptions={{ showLineNumbers: true, tabSize: 2 }} />
);

export default CSSEditor;
