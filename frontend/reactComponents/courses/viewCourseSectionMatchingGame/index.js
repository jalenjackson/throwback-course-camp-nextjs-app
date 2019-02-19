import React from 'react';
import TopProgress from '../reusableComponents/topProgress';
import { Subscribe } from 'unstated';
import ViewCourseSectionMatchingGameContainer from './container';
import Timer from './timer';
import Title from './title';
import MatchingGame from './matchingGame';
import SetTimer from './setTimer';
import EndGameResults from './endGameResults';

export default class ViewCourseSectionMatchingGameComponent extends React.Component {
  render() {
    return (
      <Subscribe to={[ViewCourseSectionMatchingGameContainer]}>
        { container => (
          <div>
            <SetTimer container={ container } matchingGame={ this.props.matchingGame } />
            <TopProgress courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
            { container.state.matchingGameEnded
              ? <EndGameResults />
              : <div className="quiz-section">
                  <Timer container={ container } { ...this.props } />
                  <Title />
                  <MatchingGame container={ container } { ...this.props } />
                </div>
            }
          </div>
        ) }
      </Subscribe>
    )
  }
}
