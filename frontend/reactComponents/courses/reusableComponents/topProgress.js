import React from 'react';
import { Steps, Icon } from 'antd';
import { Link, Router } from '../../../../routes';

const Step = Steps.Step;

const TopProgress = props => (
  <div className='video-section quiz-top-section'>
    <div style={{ background: props.courseColor + 'E6' }} className="go-back-to-track-container">
      <Link route={ `/courses/view/${ props.course._id }/track` }>
        <h3>
          <Icon type='arrow-left' />
          { ' Go Back To Track' }
        </h3>
      </Link>
    </div>
    <div style={{ background: props.courseColor }} className="upper-video-section top-inner-progress">
      <div style={{ width: '90%', display: 'block', margin: '0 auto' }} className='upper-video-section-steps'>
        <Steps current={ +props.videoIndex }>
          { props.currentSection.videos.map((video) => (
              <Step title={ video.title } />
          )) }
        </Steps>
      </div>
    </div>
  </div>
);

export default TopProgress;
