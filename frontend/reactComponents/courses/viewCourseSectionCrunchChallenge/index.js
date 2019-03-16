import React from 'react';
import TopProgress from '../reusableComponents/topProgress';
import { Subscribe } from 'unstated';
import ViewCourseSectionCrunchChallengeContainer from './container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import AfterExerciseModalContainer from '../reusableComponents/afterExerciseModal/container'
import Timer from './timer';
import Title from './title';
import CrunchChallenge from './crunchChallenge';
import Footer from "../../globalComponents/footer";
import {BarLoader} from "react-spinners";
import EndGame from "./endGame";

export default class ViewCourseSectionMatchingGameComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        this.setState({ loaded: true });
      }, 600);
    } else {
      this.setState({ loaded: true });
    }
  }
  
  render() {
    const { course, currentSection, sectionIndex, videoIndex } = this.props;
    return (
        <Subscribe to={[ViewCourseSectionCrunchChallengeContainer, NewQuestionContainer, AfterExerciseModalContainer]}>
          { (container, newQuestionContainer, afterExerciseContainer) => (
              <div>
                { this.state.loaded
                  ? <div>
                      <TopProgress { ...this.props } sectionIndex={ sectionIndex } videoIndex={ videoIndex } courseColor={ course.color } currentSection={ currentSection } />
                      { !container.state.gameOver
                        ? <div className='quiz-section'>
                            <Timer afterExerciseContainer={ afterExerciseContainer } container={ container } { ...this.props } />
                            <Title { ...this.props } />
                            <CrunchChallenge afterExerciseContainer={ afterExerciseContainer } container={ container } { ...this.props } />
                          </div>
                        : <EndGame { ...this.props } thisContainer={ container } newQuestionContainer={ newQuestionContainer } />
                      }
                      <Footer />
                    </div>
                  : <div style={ loaderStyles }>
                      <BarLoader color={'#43A5FF'} />
                    </div>
                }
              </div>
          ) }
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