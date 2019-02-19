import React from 'react';
import { Popover, Steps, Timeline } from 'antd';

const Step = Steps.Step;

const TopProgress = props => (
  <div className='video-section quiz-top-section'>
    <div style={{ background: props.courseColor }} className="upper-video-section">
      <div className='upper-video-section-steps'>
        <Steps progressDot={ (dot, { index }) => <Popover content={
          <Timeline>
            <Timeline.Item>15min Video</Timeline.Item>
            { props.currentSection.videos[index].quiz ? <Timeline.Item>Multiple Choice Quiz</Timeline.Item> : null }
            { props.currentSection.videos[index].pictureQuiz ? <Timeline.Item>Picture Quiz</Timeline.Item> : null }
            { props.currentSection.videos[index].matchingGame ? <Timeline.Item>Matching Game</Timeline.Item> : null }
            { props.currentSection.videos[index].crunchChallenge ? <Timeline.Item>Crunch Challenge</Timeline.Item> : null }
            { props.currentSection.videos[index].codingChallenge ? <Timeline.Item>Coding Exercise</Timeline.Item> : null }
            { props.currentSection.videos[index].codingProject ? <Timeline.Item>Coding Project</Timeline.Item> : null }
          </Timeline> }>{ dot }</Popover> }>
          { props.currentSection.videos.map((video) => (
              <Step title={ video.title } />
          )) }
        </Steps>
      </div>
    </div>
  </div>
);

export default TopProgress;
