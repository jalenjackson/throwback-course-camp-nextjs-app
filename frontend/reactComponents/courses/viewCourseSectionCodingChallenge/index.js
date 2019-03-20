import React from 'react';
import TopProgress from '../reusableComponents/topProgress';
import { Subscribe } from 'unstated';
import ViewCourseSectionCodingChallengeContainer from './container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import AfterExerciseModalContainer from '../reusableComponents/afterExerciseModal/container'
import Question from './question';
import CheckWork from './checkWork';
import Editor from './editor';
import Output from './output';
import Footer from '../../globalComponents/footer';
import {BarLoader} from "react-spinners";
import EndGame from "./endGame";

export default class ViewCourseSectionCodingChallengeComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
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
        <Subscribe to={[ViewCourseSectionCodingChallengeContainer, NewQuestionContainer, AfterExerciseModalContainer]}>
          { (container, newQuestionContainer, afterExerciseModalContainer) => (
              <div>
                { this.state.loaded
                  ? <div>
                      <div id='html-sandbox'>
                        <div>
                          <TopProgress { ...this.props } courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
                          { !container.state.endGame
                            ? <div className='quiz-section'>
                                <Question { ...this.props } />
                                <CheckWork container={ container } { ...this.props } />
                                <Editor container={ container } { ...this.props } />
                                <Output afterExerciseModalContainer={ afterExerciseModalContainer } container={ container } { ...this.props } />
                              </div>
                            : <EndGame { ...this.props } newQuestionContainer={ newQuestionContainer } />
                          }
                        </div>
                      </div>
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
};

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




