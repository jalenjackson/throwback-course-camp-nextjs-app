import React from 'react';
import NewQuestion from '../../globalComponents/newQuestion/index';
import { Button } from 'antd';
import EndExerciseSVG from "../reusableComponents/endExerciseSVG";
import { Link } from '../../../../routes';
import NextExercises from "../reusableComponents/nextExercises";
import AfterExerciseModal from "../reusableComponents/afterExerciseModal";

const EndGame = props => (
  <div className='quiz-section end-results'>
    <EndExerciseSVG courseColor={ props.course.color } />
    
    <h1>You scored a { props.thisContainer.state.correctAnswers } out of { props.crunchChallenge.definitions.split(',').length } total!</h1>
    
    <AfterExerciseModal />
    
    <Button.Group style={{ marginLeft: 13, marginTop: 20 }}>
      <Button
        onClick={ () => window.location.reload() }
        style={ setCourseColor(props) }
        type="primary">
        Play Crunch Challenge Again
      </Button>
      <Button
        onClick={ () => props.newQuestionContainer.updateState('visibility', true) }
        style={ setCourseColor(props) } type="primary">Ask A Question</Button>
    </Button.Group>
    
    <NextExercises { ...props } />
    
    <NewQuestion exercise={ 'Crunch Challenge' } { ...props } courseColor={ props.course.color } />
  </div>
);

const setCourseColor = props => {
  return { background: props.course.color, borderColor: 'rgb(150, 150, 150)' }
};

export default EndGame;
