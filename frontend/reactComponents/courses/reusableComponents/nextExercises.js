import React from 'react';
import { Router } from '../../../../routes';

export default class NextExercises extends React.Component {
  render() {
    return (
      <div className="next-exercises-container">
        <h3 className="exercises-to-complete-title">Exercises Added To This Video</h3>
  
        <div className='up-next-exercises'>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            { this.props.currentVideo.quiz
              ? <a onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/quiz`) }>Quiz</a>
              : null
            }
            { this.props.currentVideo.pictureQuiz
              ? <a onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/picture-quiz`) }>Picture Quiz</a>
              : null
            }
            { this.props.currentVideo.matchingGame
              ? <a onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/matching-game`) }>Matching Game</a>
              : null
            }
            { this.props.currentVideo.crunchChallenge
              ? <a onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/crunch-challenge`) }>Crunch Challenge</a>
              : null
            }
            { this.props.currentVideo.codingChallenge
              ? <a onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/coding-challenge`) }>Coding Challenge</a>
              : null
            }
            { this.props.currentVideo.codingProject
              ? <a onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/coding-project`) }>Coding Project</a>
              : null
            }
          </div>
        </div>
      </div>
    )
  }
  
  viewCourseUri = `/courses/view/${ this.props.course._id }/${ this.props.sectionIndex }/${ this.props.videoIndex }`;
}