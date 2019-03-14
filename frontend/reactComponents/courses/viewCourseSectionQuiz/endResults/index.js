import React from 'react';
import NewQuestion from '../../../globalComponents/newQuestion/index';
import { Button } from 'antd';
import EndExerciseSVG from "../../reusableComponents/endExerciseSVG";
import { Link } from '../../../../../routes';
import NextExercises from "../../reusableComponents/nextExercises";
import AfterExerciseModal from "../../reusableComponents/afterExerciseModal/index";

export default class EndResults extends React.Component {
  componentDidMount() {
    if (this.props.thisContainer.state.correctAnswers === this.props.currentQuiz.length) {
      this.props.afterExerciseModalContainer.updateState('winModalVisible', true);
    } else {
      this.props.afterExerciseModalContainer.updateState('loseModalVisible', true);
    }
  }
  
  
  render() {
    return (
      <div className='quiz-section end-results'>
        <EndExerciseSVG courseColor={ this.props.course.color } />
        <h1>You scored a { this.props.thisContainer.state.correctAnswers } / { this.props.currentQuiz.length }</h1>
    
        <AfterExerciseModal />
        
        <Button.Group style={{ marginTop: 20 }}>
          <Button
            onClick={ () => window.location.reload() }
            style={ this.setCourseColor(this.props) }
            type="primary">
            { this.props.isPictureQuiz ? 'Play Picture Quiz Again' : 'Play Quiz Again' }
          </Button>
          <Button
            onClick={ () => this.props.newQuestionContainer.updateState('visibility', true) }
            style={ this.setCourseColor(this.props) } type="primary">Ask A Question</Button>
        </Button.Group>
    
        <NextExercises { ...this.props } />
    
        <NewQuestion exercise={ this.props.isPictureQuiz ? 'Picture Quiz' : 'Quiz' } { ...this.props } courseColor={ this.props.course.color } />
      </div>
    )
  }
  
  setCourseColor = () => {
    return { background: this.props.course.color, borderColor: 'rgb(150, 150, 150)' }
  };
  
}
