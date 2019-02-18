import React from 'react';
import { Popover, Steps, Timeline } from 'antd';

const Step = Steps.Step;

export default class TopProgress extends React.Component {
  render() {
    const { course, currentVideo, currentSection } = this.props;
    return (
        <div>
          <div className='video-section quiz-top-section'>
            <div style={{ background: course.color }} className="upper-video-section">
              <div className='upper-video-section-steps'>
                <Steps progressDot={ (dot, { index }) => <Popover content={
                  <Timeline>
                    <Timeline.Item>15min Video</Timeline.Item>
                    { currentSection.videos[index].quiz ? <Timeline.Item>Multiple Choice Quiz</Timeline.Item> : null }
                    { currentSection.videos[index].pictureQuiz ? <Timeline.Item>Picture Quiz</Timeline.Item> : null }
                    { currentSection.videos[index].matchingGame ? <Timeline.Item>Matching Game</Timeline.Item> : null }
                    { currentSection.videos[index].crunchChallenge ? <Timeline.Item>Crunch Challenge</Timeline.Item> : null }
                    { currentSection.videos[index].codingChallenge ? <Timeline.Item>Coding Exercise</Timeline.Item> : null }
                    { currentSection.videos[index].codingProject ? <Timeline.Item>Coding Project</Timeline.Item> : null }
                  </Timeline> }>{ dot }</Popover> }>
                  { currentSection.videos.map((video) => (
                      <Step title={ video.title } />
                  )) }
                </Steps>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
