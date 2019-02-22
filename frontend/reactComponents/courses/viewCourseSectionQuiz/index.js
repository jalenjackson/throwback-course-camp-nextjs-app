import React from 'react';
import { Subscribe } from 'unstated';
import Footer from '../../globalComponents/footer';
import ViewCourseSectionQuizContainer from './container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import PopQuizIntro from './popQuizIntro';
import Quiz from "./quiz/index";
import EndResults from './endResults/index';
import TopProgress from '../reusableComponents/topProgress';

export default class ViewCourseSectionQuiz extends React.Component {
  componentDidMount () {
    $('body').css({
      background: `linear-gradient(rgb(255,245,245), ${ this.props.course.color }80)`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    })
  }

  render() {
    return (
        <Subscribe to={[ViewCourseSectionQuizContainer, NewQuestionContainer]}>
          { (container, newQuestionContainer) => (
             <div className='view-course-section-quiz'>
               <PopQuizIntro container={ container } { ...this.props } />
               <TopProgress courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
                { !container.state.gameOver
                  ? <Quiz container={ container } { ...this.props } />
                  : <EndResults { ...this.props } newQuestionContainer={ newQuestionContainer } />
                }
                <Footer />
             </div>
          )}
        </Subscribe>
    )
  }
}
