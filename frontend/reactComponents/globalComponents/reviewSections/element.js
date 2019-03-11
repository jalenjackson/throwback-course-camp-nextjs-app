import React from 'react';
import { Timeline, Icon } from 'antd';
import { Link } from '../../../../routes';
import {getCourseProgress} from "../../../../globalHelpers/getCourseProgress";

const Element = props => (
    <div>
      <div>
        <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }` : '#' }>
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
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/quiz` : '#' }>
                    <a style={{ color: getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex)
                        ? isPerfectScore(
                          getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex).split('/')[0],
                          getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex).split('/')[1])
                            ? '#5FCF80'
                            : '#FE4E56'
                        : '#1890FF'
                      }}>
                      { getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex)
                        ? <span>{`
                            You took this quiz and scored a
                            ${ getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex) }
                            ${ isPerfectScore(
                                 getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex).split('/')[0],
                                 getCourseProgress(props.course._id, props.auth, 'quiz', props.sectionIndex, props.videoIndex).split('/')[1]
                              ) ? 'Great job!'
                                : 'Improve your score'
                            }
                          `}</span>
                        : 'Quiz'
                      }
                    </a>
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.pictureQuiz
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/picture-quiz` : '#' }>
                    <a style={{ color: getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex)
                        ? isPerfectScore(
                          getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex).split('/')[0],
                          getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex).split('/')[1])
                          ? '#5FCF80'
                          : '#FE4E56'
                        : '#1890FF'
                    }}>
                      { getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex)
                        ? <span>{`
                            You took this picture quiz and scored a
                            ${ getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex) }
                            ${ isPerfectScore(
                          getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex).split('/')[0],
                          getCourseProgress(props.course._id, props.auth, 'pictureQuiz', props.sectionIndex, props.videoIndex).split('/')[1]
                        ) ? 'Great job!'
                          : 'Improve your score'
                          }
                          `}</span>
                        : 'Take Picture Quiz'
                      }
                    </a>
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.matchingGame
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/matching-game` : '#' }>
                    <a style={{ color:
                        getCourseProgress(props.course._id, props.auth, 'matchingGame', props.sectionIndex, props.videoIndex)
                          ? '#5FCF80'
                          : '#1890FF'
                    }}>
                      { getCourseProgress(props.course._id, props.auth, 'matchingGame', props.sectionIndex, props.videoIndex)
                        ? <span>{`
                            Great job! You completed this matching game!
                          `}</span>
                        : 'Take Matching Game'
                      }
                    </a>
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.crunchChallenge
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/crunch-challenge` : '#' }>
                    <a style={{ color: getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex)
                        ? isPerfectScore(
                          getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex).split('/')[0],
                          getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex).split('/')[1])
                          ? '#5FCF80'
                          : '#FE4E56'
                        : '#1890FF'
                    }}>
                      { getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex)
                        ? <span>{`
                            You took this crunch challenge and scored a
                            ${ getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex) }
                            ${ isPerfectScore(
                          getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex).split('/')[0],
                          getCourseProgress(props.course._id, props.auth, 'crunchChallenge', props.sectionIndex, props.videoIndex).split('/')[1]
                        ) ? 'Great job!'
                          : 'Improve your score'
                          }
                          `}</span>
                        : 'Take Crunch Challenge'
                      }
                    </a>
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.codingChallenge
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/coding-challenge` : '#' }>
                    <a style={{ color: getCourseProgress(props.course._id, props.auth, 'codingChallenge', props.sectionIndex, props.videoIndex)
                        ? '#5FCF80'
                        : '#1890FF'
                    }}>
                      { getCourseProgress(props.course._id, props.auth, 'codingChallenge', props.sectionIndex, props.videoIndex)
                        ? <span>{`
                            Great job! You completed this coding challenge!
                          `}</span>
                        : 'Take Coding Exercise'
                      }
                    </a>
                  </Link>
                </Timeline.Item>
              : null
            }
            { props.video.codingProject
              ? <Timeline.Item>
                  <Link to={ props.courseNotInState ? `/courses/view/${ props.course._id }/${ props.sectionIndex }/${ props.videoIndex }/coding-project` : '#' }>
                    <a style={{ color: getCourseProgress(props.course._id, props.auth, 'codingProject', props.sectionIndex, props.videoIndex)
                        ? '#5FCF80'
                        : '#1890FF'
                    }}>
                      { getCourseProgress(props.course._id, props.auth, 'codingProject', props.sectionIndex, props.videoIndex)
                        ? <span>{`
                            Great job! You completed this coding project!
                          `}</span>
                        : 'Take Coding Project'
                      }
                    </a>
                  </Link>
                </Timeline.Item>
              : null
            }
          </Timeline>
        </div>
      </div>
    </div>
);

const isPerfectScore = (score, length) => {
  return score === length;
};

export default Element;
