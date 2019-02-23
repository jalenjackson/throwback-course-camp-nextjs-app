import React from 'react';
import { Timeline } from 'antd';
import { Link } from '../../../../routes';

const Element = props => (
    <div>
      <div>
        <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0` : '#' }>
          <div style={{ background: props.courseNotInState
              ? props.course.color
              : props.container.state.course.color
          }} className='course-track-element-circle'>
            <img src='/static/icons/video-play.svg' />
          </div>
        </Link>
        <h1 className='course-track-element-title'>{ props.video.title ? props.video.title : 'No title for this video' }</h1>
        <div className='course-track-timeline'>
          <Timeline>
            { props.video.quiz
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0/quiz` : '#' }>
                    Multiple Choice Quiz
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.pictureQuiz
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0/picture-quiz` : '#' }>
                    Picture Quiz
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.matchingGame
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0/matching-game` : '#' }>
                    Matching Game
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.crunchChallenge
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0/crunch-challenge` : '#' }>
                    Crunch Challenge
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.codingChallenge
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0/coding-challenge` : '#' }>
                    Coding Exercise
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.codingProject
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/0/0/coding-project` : '#' }>
                    Coding Project
                  </Link>
                </Timeline.Item>
              : null
            }
          </Timeline>
        </div>
      </div>
    </div>
);

export default Element;
