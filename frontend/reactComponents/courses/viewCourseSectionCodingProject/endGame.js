import React from 'react';
import EndExerciseSVG from "../reusableComponents/endExerciseSVG";
import {Button} from "antd";
import NewQuestion from '../../globalComponents/newQuestion';
import NextExercises from '../reusableComponents/nextExercises';
import AfterExerciseModal from "../reusableComponents/afterExerciseModal";

const EndGame = props => (
  <div style={{ width: '100%' }} className='quiz-section end-results'>
    <EndExerciseSVG courseColor={ props.course.color } />
    <h1>Awesome Work!</h1>
    
    <AfterExerciseModal />
    
    <Button.Group style={{ marginLeft: 13, marginTop: 20 }}>
      <Button
        onClick={ () => window.location.reload() }
        style={ setCourseColor(props) }
        type="primary">
        Play Coding Project Again
      </Button>
      <Button
        onClick={ () => props.newQuestionContainer.updateState('visibility', true) }
        style={ setCourseColor(props) } type="primary">Ask A Question</Button>
    </Button.Group>
    
    <NextExercises { ...props } />
    
    <NewQuestion exercise={ 'Coding Project' } { ...props } courseColor={ props.course.color } />
  </div>
);

const setCourseColor = props => {
  return { background: props.course.color, borderColor: 'rgb(150, 150, 150)' }
};

export default EndGame;
