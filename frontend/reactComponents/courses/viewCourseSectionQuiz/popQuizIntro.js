import React from 'react';
import { GSAPAnimateText } from './helpers';
let SplitText = null;
let DrawSVG = null;

export default class PopQuizIntro extends React.Component {
  componentDidMount() {
    SplitText = require('../../../../globalHelpers/splitText');
    DrawSVG = require('../../../../globalHelpers/drawSVGPlugin');
    GSAPAnimateText('.pop-quiz-container h1', this.props.container, this.props.isPictureQuiz);
  }

  render() {
    const { isPictureQuiz } = this.props;
    return (
      <div className='pop-quiz-container'>
        { isPictureQuiz
          ? <div>
              <img src='/static/icons/camera.svg' />
              <h1 className='pop'>POP PICTURE QUIZ!</h1>
            </div>
          : <div>
              <img src='/static/icons/question-mark.svg' />
              <h1 className='pop'>POP QUIZ!</h1>
            </div>
        }
      </div>
    )
  }
}
