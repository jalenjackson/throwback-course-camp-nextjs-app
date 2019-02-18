import React from 'react';
import { Subscribe } from 'unstated';
import Footer from '../../globalComponents/footer';
import ViewCourseSectionQuizContainer from './container';
import PopQuizIntro from './popQuizIntro';
import Quiz from "./quiz/index";
import TopProgress from "./TopProgress";
import GameOver from "./gameOver";

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
        <Subscribe to={[ViewCourseSectionQuizContainer]}>
          { container => (
             <div className='view-course-section-quiz'>
               <PopQuizIntro container={ container } { ...this.props } />
                <TopProgress { ...this.props } />
                { !container.state.gameOver
                  ? <Quiz container={ container } { ...this.props } />
                  : <GameOver />
                }
                <Footer />
             </div>
          )}
        </Subscribe>
    )
  }
}
