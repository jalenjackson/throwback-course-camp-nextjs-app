import React from 'react';
import TopProgress from '../reusableComponents/topProgress';
import { Subscribe } from 'unstated';
import ViewCourseSectionMatchingGameContainer from './container';
import AfterExerciseModalContainer from '../reusableComponents/afterExerciseModal/container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import Timer from './timer';
import Title from './title';
import MatchingGame from './matchingGame';
import SetTimer from './setTimer';
import EndGameResults from './endGameResults';
import {BarLoader} from "react-spinners";

export default class ViewCourseSectionMatchingGameComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    window.setTimeout(function() {}, 0);
    
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({ loaded: true });
      }, 600);
    } else {
      await this.setState({ loaded: true });
    }
  }
  
  render() {
    const { course, currentSection, sectionIndex, videoIndex } = this.props;
    return (
      <Subscribe to={[ViewCourseSectionMatchingGameContainer, NewQuestionContainer, AfterExerciseModalContainer]}>
        { (container, newQuestionContainer, afterExerciseModalContainer) => (
          <div>
            { this.state.loaded
              ? <div>
                  <SetTimer container={ container } matchingGame={ this.props.matchingGame } />
                  <TopProgress { ...this.props } sectionIndex={ sectionIndex } videoIndex={ videoIndex } courseColor={ course.color } currentSection={ currentSection } />
                  { container.state.matchingGameEnded
                    ? <EndGameResults newQuestionContainer={ newQuestionContainer } thisContainer={ container } { ...this.props } />
                    : <div className="quiz-section">
                      <Timer afterExerciseModalContainer={ afterExerciseModalContainer } container={ container } { ...this.props } />
                      <Title />
                      <MatchingGame afterExerciseModalContainer={ afterExerciseModalContainer } container={ container } { ...this.props } />
                    </div>
                  }
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
