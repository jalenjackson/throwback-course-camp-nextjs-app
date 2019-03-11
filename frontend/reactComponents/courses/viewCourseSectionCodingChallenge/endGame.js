import React from 'react';
import EndExerciseSVG from "../reusableComponents/endExerciseSVG";
import {Button} from "antd";
import NextExercises from '../reusableComponents/nextExercises';
import NewQuestion from '../../globalComponents/newQuestion';
import AfterExerciseModal from "../reusableComponents/afterExerciseModal";

export default class EndGame extends React.Component {
  render() {
    return (
      <div className='quiz-section end-results'>
        <EndExerciseSVG courseColor={ this.props.course.color } />
        <h1>You are amazing! Keep it up!</h1>
  
        <AfterExerciseModal />
        
        <Button.Group style={{ marginLeft: 13, marginTop: 20 }}>
          <Button
            onClick={ () => window.location.reload() }
            style={ this.setCourseColor(this.props) }
            type="primary">
              Play Coding Challenge Again
          </Button>
          <Button
            onClick={ () => this.props.newQuestionContainer.updateState('visibility', true) }
            style={ this.setCourseColor(this.props) } type="primary">Ask A Question</Button>
        </Button.Group>
  
        <NextExercises { ...this.props } />
  
        <NewQuestion exercise={ 'codingChallenge' } { ...this.props } courseColor={ this.props.course.color } />
      </div>
    )
  }
  
  
  setCourseColor = () => {
    return { background: this.props.course.color, borderColor: 'rgb(150, 150, 150)' }
  };
}
