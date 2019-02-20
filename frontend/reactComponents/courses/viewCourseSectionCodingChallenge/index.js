import React from 'react';
import TopProgress from '../reusableComponents/topProgress';
import { Subscribe } from 'unstated';
import ViewCourseSectionCodingChallengeContainer from './container';
import Question from './question';
import CheckWork from './checkWork';
import Editor from './editor';
import Output from './output';
import Footer from '../../globalComponents/footer';

export default class ViewCourseSectionCodingChallengeComponent extends React.Component {
  render() {
    return (
        <Subscribe to={[ViewCourseSectionCodingChallengeContainer]}>
          { container => (
              <div>
                <div id='html-sandbox'>
                  <div>
                    <TopProgress courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
                    <div className='quiz-section'>
                      <Question />
                      <CheckWork container={ container } { ...this.props } />
                      <Editor container={ container } { ...this.props } />
                      <Output container={ container } { ...this.props } />
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
          ) }
        </Subscribe>
    )
  }
};




