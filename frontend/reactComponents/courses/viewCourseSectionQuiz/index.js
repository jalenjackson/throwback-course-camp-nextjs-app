import React from 'react';
import { Subscribe } from 'unstated';
import Footer from '../../globalComponents/footer';
import ViewCourseSectionQuizContainer from './container';
import AfterExerciseModalContainer from '../reusableComponents/afterExerciseModal/container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import Quiz from './quiz/index';
import EndResults from './endResults/index';
import TopProgress from '../reusableComponents/topProgress';
import {BarLoader} from "react-spinners";
let SplitText = null;

export default class ViewCourseSectionQuiz extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    SplitText = require('../../../../globalHelpers/splitText');
  
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({loaded: true});
      }, 600);
    } else {
      await this.setState({loaded: true});
    }
  }

  render() {
    return (
        <Subscribe to={[ViewCourseSectionQuizContainer, NewQuestionContainer, AfterExerciseModalContainer]}>
          { (container, newQuestionContainer, afterExerciseModalContainer) => (
            <div>
              { this.state.loaded
                ? <div className='view-course-section-quiz'>
                    <TopProgress { ...this.props } courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
                    { !container.state.gameOver
                      ? <Quiz container={ container } { ...this.props } />
                      : <EndResults afterExerciseModalContainer={ afterExerciseModalContainer } { ...this.props } thisContainer={ container } newQuestionContainer={ newQuestionContainer } />
                    }
                    <Footer />
                  </div>
                : <div style={ loaderStyles }>
                    <BarLoader color={'#43A5FF'} />
                  </div>
              }
            </div>
          )}
        </Subscribe>
    )
  }
}

const loaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderBottom: '1px solid #e8e8e8',
  boxShadow: 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)',
  height: '46px',
};

