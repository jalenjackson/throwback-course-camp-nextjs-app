import React from 'react';
import TopProgress from '../reusableComponents/topProgress';
import { Subscribe } from 'unstated';
import ViewCourseSectionCrunchChallengeContainer from './container';
import Timer from './timer';
import Title from './title';
import CrunchChallenge from './crunchChallenge';

export default class ViewCourseSectionMatchingGameComponent extends React.Component {
  render() {
    return (
        <Subscribe to={[ViewCourseSectionCrunchChallengeContainer]}>
          { container => (
              <div>
                <TopProgress courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
                <div className='quiz-section'>
                  <Timer container={ container } { ...this.props } />
                  <Title { ...this.props } />
                  <CrunchChallenge container={ container } { ...this.props } />
                </div>
              </div>
          ) }
        </Subscribe>
    )
  }
}
