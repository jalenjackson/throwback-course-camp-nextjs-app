import React from 'react';
import SVGAnimation from './svgAnimation';
import { animatePopQuizSVG, GSAPAnimateText } from './helpers';
let SplitText = null;
let DrawSVG = null;

export default class PopQuizIntro extends React.Component {
  componentDidMount() {
    SplitText = require('../../../../globalHelpers/splitText');
    DrawSVG = require('../../../../globalHelpers/drawSVGPlugin');
    GSAPAnimateText('.pop-quiz-container h1', this.props.container);
    animatePopQuizSVG();
  }

  render() {
    return (
      <div className="pop-quiz-container">
        <SVGAnimation { ...this.props } />
        <img src='/static/icons/question-mark.svg' />
        <h1 className='pop'>POP QUIZ!</h1>
      </div>
    )
  }
}
