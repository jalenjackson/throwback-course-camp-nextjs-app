import React from 'react';
import { Steps } from 'antd';
import { navigatePane } from './navigatePane';

const Step = Steps.Step;

const TopProgress = props => (
  <div id="top-progress-course-builder">
    <div className='top-progress-course-builder-inner'>
      <Steps style={{ transform: 'translateY(25px)' }} current={ props.container.state.currentPaneNumber } progressDot={customDot}>
        <Step style={{ cursor: 'pointer' }} onClick={ () => navigatePane(props, 0, 'courseBuilder') } title="Build" />
        <Step style={{ cursor: 'pointer' }} onClick={ () => navigatePane(props, 1, 'review') } title="Review" />
        <Step style={{ cursor: 'pointer' }} onClick={ () => navigatePane(props, 2, 'publish') } title="Publish" />
      </Steps>
    </div>
  </div>
);

const customDot = dot => (
  <span>{ dot }</span>
);

export default TopProgress;
