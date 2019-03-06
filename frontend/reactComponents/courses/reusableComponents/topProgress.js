import React from 'react';
import { Popover, Steps, Timeline } from 'antd';
import { Link } from '../../../../routes';

const Step = Steps.Step;

const TopProgress = props => (
  <div className='video-section quiz-top-section'>
    <div style={{ background: props.courseColor }} className="upper-video-section">
      <div style={{ width: '90%', display: 'block', margin: '0 auto' }} className='upper-video-section-steps'>
        <Steps>
          { props.currentSection.videos.map((video) => (
              <Step title={ video.title } />
          )) }
        </Steps>
      </div>
    </div>
  </div>
);

export default TopProgress;
