import React from 'react'
import Sections from './columns/sections';
import Language from './columns/language';
import BuyCourseWrapper from './columns/buyCourse';
import Instructor from './columns/intructor';
import Learning from './columns/learning';
import Completion from './columns/completion';
import RightCourseDetails from './rightCourseDetails';
import Footer from '../../globalComponents/footer';
import AuthContainer from '../../globalComponents/navbar/navbarContainer';
import { Subscribe } from 'unstated';
import {BarLoader} from "react-spinners";
import { Link } from '../../../../routes';
import ContinueLearningButton from "./columns/continueLearningButton";
import EditCourseButton from "./columns/editCourseButton";
import {animateElementsOnLoad} from "./helpers";
import Reviews from "./columns/reviews";

export default class ViewCourseComponent extends React.Component {
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
      <Subscribe to={[AuthContainer]}>
        { authContainer => (
          <div id='view-course'>
            { this.state.loaded
              ? <div>
                <div className="course-sections-container">
                  <div id='course-sections'>
                    { this.props.course.price === 0 || (this.props.userPaidForCourseAlready && this.props.auth.authenticated)
                      ? <ContinueLearningButton { ...this.props } />
                      : this.props.auth.authenticated && this.props.didTheUserCreateThisCourse
                        ? <EditCourseButton { ...this.props } />
                        : <BuyCourseWrapper authContainer={ authContainer } { ...this.props } />
                    }
                    <Language { ...this.props }/>
                    <Reviews { ...this.props } />
                    <Instructor { ...this.props } />
                    <Learning { ...this.props } />
                    <Sections { ...this.props } />
                    <Completion { ...this.props } />
                  </div>
                </div>
                <RightCourseDetails { ...this.props } />
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