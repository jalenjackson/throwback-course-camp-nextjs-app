import React from 'react';
import { Steps } from "antd";
import { Router } from '../../../../routes';

const Step = Steps.Step;

export default class NextExercises extends React.Component {
  render() {
    return (
      <div className="next-exercises-container">
        <h3 className="exercises-to-complete-title">Exercises</h3>
  
        <div className='up-next-exercises'>
          <Steps progressDot={ dot => <span>{dot}</span>} current={ -1 }>
            { this.props.currentVideo.quiz
              ? <Step onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/quiz`) } title="Quiz" />
              : null
            }
            { this.props.currentVideo.pictureQuiz
              ? <Step onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/picture-quiz`) } title="Picture Quiz" />
              : null
            }
            { this.props.currentVideo.matchingGame
              ? <Step onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/matching-game`) } title="Matching Game" />
              : null
            }
            { this.props.currentVideo.crunchChallenge
              ? <Step onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/crunch-challenge`) } title="CrunchChallenge" />
              : null
            }
            { this.props.currentVideo.codingChallenge
              ? <Step onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/coding-challenge`) } title="Coding Challenge" />
              : null
            }
            { this.props.currentVideo.codingProject
              ? <Step onClick={ () => Router.pushRoute(`${ this.viewCourseUri }/coding-project`) } title="Coding Project" />
              : null
            }
          </Steps>
        </div>
      </div>
    )
  }
  
  viewCourseUri = `/courses/view/${ this.props.course._id }/${ this.props.sectionIndex }/${ this.props.videoIndex }`;
}