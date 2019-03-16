import React from 'react';
import CurrentSandbox from './currentSandbox';
import TopProgress from '../reusableComponents/topProgress';
import CodingProjectContainer from './container';
import AfterExerciseModalContainer from '../reusableComponents/afterExerciseModal/container';
import { Subscribe } from 'unstated';
import NewQuestionContainer from "../../globalComponents/newQuestion/container";
import Footer from '../../globalComponents/footer';

export default class ViewCourseSectionCodingProjectComponent extends React.Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  
  render() {
    const { course, currentSection, sectionIndex, videoIndex } = this.props;
    return (
      <Subscribe to={[CodingProjectContainer, NewQuestionContainer, AfterExerciseModalContainer]}>
        { (container, newQuestionContainer, afterExerciseModalContainer) => (
          <div id='html-sandbox'>
            <div className="coding-project">
              <TopProgress { ...this.props } sectionIndex={ sectionIndex } videoIndex={ videoIndex } courseColor={ course.color } currentSection={ currentSection } />
              <CurrentSandbox afterExerciseModalContainer={ afterExerciseModalContainer } { ...this.props } container={ container } newQuestionContainer={ newQuestionContainer } />
            </div>
            <Footer />
          </div>
        ) }
      </Subscribe>
    )
  }
};




