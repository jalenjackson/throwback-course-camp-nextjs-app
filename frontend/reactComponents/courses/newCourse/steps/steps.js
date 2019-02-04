import React from 'react';
import { Steps } from 'antd';
import { steps } from '../helpers';

const Step = Steps.Step;

const AllSteps = props => (
  <div className="create-new-course-steps">
    <Steps current={props.currentStep}>
      { steps.map(item => <Step key={ item.title } title={ item.title } />) }
    </Steps>
  </div>
);

export default AllSteps;
