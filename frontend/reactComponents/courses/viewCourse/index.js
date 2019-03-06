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
import { Button } from "antd";
import EditCourseButton from "./columns/editCourseButton";

export default class ViewCourseComponent extends React.Component {
  state = {
    loaded: false
  };
  
  componentDidMount() {
    if (this.props.isRequestFromServer) {
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 600);
    } else {
      this.setState({ loaded: true });
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
                    { this.props.userPaidForCourseAlready && this.props.auth.authenticated
                      ? <ContinueLearningButton { ...this.props } />
                      : this.props.auth.authenticated && this.props.didTheUserCreateThisCourse
                        ? <EditCourseButton { ...this.props } />
                        : <BuyCourseWrapper authContainer={ authContainer } { ...this.props } />
                    }
                    <Language { ...this.props }/>
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