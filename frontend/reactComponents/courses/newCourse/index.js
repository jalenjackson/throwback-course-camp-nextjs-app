import React from 'react';
import AllSteps from './steps/steps';
import { Subscribe } from 'unstated';
import NewCourseContainer from './container';
import CourseBuilderContainer from '../../courses/courseBuilder/container';
import AddTitle from './steps/addTitle/index';
import AddDescription from './steps/addDescription/index';
import AddPrice from './steps/addPrice/index';
import Review from './steps/review/index';
import AddColor from './steps/addColor/index';
import AddCategory from './steps/addCategory';
import AddLearning from './steps/addLearning';
import AddLanguage from './steps/addLanguage';
import SetInitialStateFromData from './setinitialStateFromData';
import AddShortSummary from './steps/addShortSummary';
import Footer from '../../globalComponents/footer';
import {animateElementsOnLoad} from "../viewCourse/helpers";
import {BarLoader} from "react-spinners";

class NewCourseComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({ loaded: true });
        animateElementsOnLoad();
      }, 600);
    } else {
      await this.setState({ loaded: true });
      animateElementsOnLoad();
    }
  }

  render() {
    return (
      <Subscribe to={[NewCourseContainer, CourseBuilderContainer]}>
        { (newCourseContainer, courseBuilderContainer) => (
          <div>
            { this.state.loaded
              ? <div>
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
                      { newCourseContainer.state.currentStep === 8 ? <Review { ...this.props } container={ newCourseContainer } auth={ this.props.auth } /> : null }
                    </div>
                  </div>
                  <Footer marginTop={ 150 } />
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

export default NewCourseComponent;
