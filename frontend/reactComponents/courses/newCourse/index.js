import React from 'react';
import AllSteps from './steps/steps';
import { Subscribe } from 'unstated';
import NewCourseContainer from './container';
import NavbarContainer from '../../globalComponents/navbar/navbarContainer';
import CourseBuilderContainer from '../../courses/courseBuilder/container';
import AddTitle from './steps/addTitle/index';
import AddDescription from './steps/addDescription/index';
import AddPrice from './steps/addPrice/index';
import AddImage from './steps/review/index';
import AddColor from './steps/addColor/index';
import AddCategory from './steps/addCategory';
import AddLearning from './steps/addLearning';
import AddLanguage from './steps/addLanguage';
import SetInitialStateFromData from './setinitialStateFromData';
import AddShortSummary from './steps/addShortSummary';
import Footer from '../../globalComponents/footer';

class NewCourseComponent extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'rgb(245, 245, 255)';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
    return (
      <Subscribe to={[NewCourseContainer, NavbarContainer, CourseBuilderContainer]}>
        { (newCourseContainer, navbarContainer, courseBuilderContainer) => (
          <div>
            <SetInitialStateFromData course={ this.props.course } isFromBuildCourse={ this.props.course } container={ newCourseContainer } />
            <div id='create-new-course'>
              <AllSteps currentStep={ newCourseContainer.state.currentStep } />
              <div className='steps-action'>
                { newCourseContainer.state.currentStep === 0 ? <AddTitle { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 1 ? <AddLanguage { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 2 ? <AddShortSummary { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 3 ? <AddDescription { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 4 ? <AddCategory { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 5 ? <AddLearning { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 6 ? <AddColor { ...this.props } courseBuilderContainer={ courseBuilderContainer } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 7 ? <AddPrice { ...this.props } container={ newCourseContainer } /> : null }
                { newCourseContainer.state.currentStep === 8 ? <AddImage { ...this.props } navbarContainer={ navbarContainer } container={ newCourseContainer } auth={ this.props.auth } /> : null }
              </div>
            </div>
            <Footer marginTop={ 150 } />
          </div>
        )}
      </Subscribe>
    )
  }
}

export default NewCourseComponent;
