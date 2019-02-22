import React from 'react';
import { pluginsEnabled } from '../../courses/newCourse/steps/addDescription/pluginsEnabled';

export default class Body extends React.Component {
  componentDidMount() {
    const textArea = $('#add-new-question-body');
    textArea.froalaEditor({
      fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
      codeMirror: true,
      pluginsEnabled
    });

    textArea.on('froalaEditor.contentChanged', e => {
      this.props.container.updateState('body', e.target.value);
    });
  }

  render() {
    return (
      <textarea id='add-new-question-body' value={ this.props.container.state.body } rows={ 4 } />
    )
  }
}
