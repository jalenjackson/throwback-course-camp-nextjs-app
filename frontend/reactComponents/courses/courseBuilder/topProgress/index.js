import React from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;

const TopProgress = () => (
  <div id="top-progress-course-builder">
    <div className='top-progress-course-builder-inner'>
      <Steps style={{ transform: 'translateY(25px)' }} current={ 0 } progressDot={customDot}>
        <Step title="Build" />
        <Step title="Review" />
        <Step title="Launch" />
      </Steps>
    </div>
  </div>
);

const customDot = (dot, { status, index }) => (
  <span>{ dot }</span>
);

export default TopProgress;
