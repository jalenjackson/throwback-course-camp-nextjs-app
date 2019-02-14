import React from 'react';
import { Timeline } from 'antd';

const Element = props => (
    <div>
      <div>
        <div style={{ background: props.container.state.course.color }} className='course-track-element-circle'>
          <img src='/static/icons/video-play.svg' />
        </div>
        <h1 className='course-track-element-title'>{ props.video.title ? props.video.title : 'No title for this video' }</h1>
        <div className='course-track-timeline'>
          <Timeline>
            { props.video.quiz ? <Timeline.Item>Multiple Choice Quiz</Timeline.Item> : null }
            { props.video.pictureQuiz ? <Timeline.Item>Picture Quiz</Timeline.Item> : null }
            { props.video.matchingGame ? <Timeline.Item>Matching Game</Timeline.Item> : null }
            { props.video.crunchChallenge ? <Timeline.Item>Crunch Challenge</Timeline.Item> : null }
            { props.video.codingChallenge ? <Timeline.Item>Coding Exercise</Timeline.Item> : null }
            { props.video.codingProject ? <Timeline.Item>Coding Project</Timeline.Item> : null }
          </Timeline>
        </div>
      </div>
    </div>
);

export default Element;
