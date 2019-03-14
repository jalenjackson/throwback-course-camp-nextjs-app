import React from 'react';
import { Subscribe } from 'unstated';
import NewQuestionContainer from './container';
import QuestionModal from "./questionModal";
import QuestionSuccess from "./questionSuccess";

export default class NewQuestion extends React.Component {
  render() {
    return (
      <Subscribe to={[NewQuestionContainer]}>
        { container => (
          <div id='create-new-question'>
            <QuestionModal container={ container } { ...this.props } />
            <QuestionSuccess container={ container } { ...this.props } />
          </div>
        ) }
      </Subscribe>
    )
  }
}
