import React from 'react';
import CurrentSandbox from './currentSandbox';
import TopProgress from '../reusableComponents/topProgress';
import CodingProjectContainer from './container';
import { Subscribe } from 'unstated';

export default class ViewCourseSectionCodingProjectComponent extends React.Component {
  render() {
    return (
      <Subscribe to={[CodingProjectContainer]}>
        { container => (
          <div id='html-sandbox'>
            <div className="coding-project">
              <TopProgress courseColor={ this.props.course.color } currentSection={ this.props.currentSection } />
              <CurrentSandbox { ...this.props } container={ container } />
            </div>
          </div>
        ) }
      </Subscribe>
    )
  }
};




