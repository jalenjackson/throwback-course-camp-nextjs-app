import React from 'react';
import NewQuestion from '../../../globalComponents/newQuestion/index';
import { Button } from 'antd';

const EndResults = props => (
  <div className='quiz-section'>
    <h1>End Results</h1>
    <Button.Group style={{ marginLeft: 13, marginTop: 20 }}>
      <Button
          onClick={ () => props.newQuestionContainer.updateState('visibility', true) }
          style={{ background: props.course.color, borderColor: 'rgb(150, 150, 150)' }} type="primary">Ask A Question</Button>
      <Button style={{ background: props.course.color, borderColor: 'rgb(150, 150, 150)' }} type="primary">View Forum</Button>
      <NewQuestion exercise='quiz' { ...props } courseColor={ props.course.color } />
    </Button.Group>
  </div>
);

export default EndResults;
