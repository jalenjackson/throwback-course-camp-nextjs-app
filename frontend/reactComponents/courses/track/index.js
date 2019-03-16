import React from 'react';
import ReviewSections from '../../globalComponents/reviewSections/index'
import {Button, Modal, Progress} from 'antd';
import { Link, Router } from '../../../../routes';
import {getTotalCoursePoints, getTotalUserCoursePoints} from "../../../../globalHelpers/handleCoursePoints";
import ReviewCourse from "../../globalComponents/reviewCourse/index";
import TrackContainer from './container';
import { Subscribe } from 'unstated';
import PageLoader from "../../globalComponents/pageLoader";

export default class Track extends React.Component {
  state = {
    loaded: false,
    firstTimeModalVisible: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    const isFromServer = this.props.isRequestFromServer;
    setTimeout(async () => {
      await this.setState({ loaded: true });
      if (window.location.href.split('?').length > 1) {
        this.showFirstTimeModal();
      }
    }, isFromServer ? 600 : 0);
  }
  
  navigateToFirstTimeFirstVideo = async () => {
    await this.setState({ firstTimeModalVisible: false });
    Router.pushRoute(`/courses/view/${ this.props.course._id }/0/0`);
  };
  
  render() {
    return (
      <Subscribe to={[TrackContainer]}>
        { container => (
          <div>
            { this.state.loaded
              ? <div>
                <div className='first-time-modal-track'>
                  <Modal
                    title={ `Welcome to ${ this.props.course.title }` }
                    centered
                    visible={ this.state.firstTimeModalVisible }
                    onOk={ () => this.setState({ firstTimeModalVisible: false }) }
                    onCancel={ () => this.setState({ firstTimeModalVisible: false }) }>
                    <img src='/static/backgroundImages/educationalBackground.svg' />
                    <h2 style={{ marginTop: 20 }}>Learning Track</h2>
                    <p>{ "This is the learning track. Here you can get an overview of the entire your course. Let's get started by watching the first video! Click the first Video " }
                      <a onClick={ () => this.navigateToFirstTimeFirstVideo() }>{ this.props.course.sections[0].videos[0].title }</a>
                    </p>
                  </Modal>
                </div>
                <h1 style={{ textAlign: 'center', fontSize: 18, color: 'rgb(80, 80, 85)', marginTop: 35, marginBottom: 30 }}>{ this.props.course.title }</h1>
    
                <Button className="review-course-btn" type='primary' onClick={ () => container.updateState('showReviewModal', true) }>Review Course</Button>
                <ReviewCourse container={ container } { ...this.props } />
        
                <div className='course-progress-xp' id='course-track-element-container'>
                  <h1>Course Xp gained</h1>
                  <div className='progress-container'>
                    <Progress width={170} format={() => `${ getTotalUserCoursePoints(this.props.course._id, this.props.auth) }/${+getTotalCoursePoints(this.props.course)} xp earned`} type="circle" percent={
                      (+getTotalUserCoursePoints(this.props.course._id, this.props.auth)
                        /
                        +getTotalCoursePoints(this.props.course)) * 100 } />
                  </div>
                  { getTotalUserCoursePoints(this.props.course._id, this.props.auth) === getTotalCoursePoints(this.props.course)
                    ? <p style={{ textAlign: 'center', fontSize: 16, color: '#87D068', paddingBottom: 30 }}>
                      Awesome job completing this course!
                    </p>
                    : null
                  }
                </div>
        
                <ReviewSections { ...this.props } courseNotInState={ true } fromCourseTrack={ true } />
              </div>
              : <PageLoader />
            }
          </div>
        ) }
      </Subscribe>
    )
  }
  
  showFirstTimeModal = () => {
    setTimeout(() => {
      this.setState({ firstTimeModalVisible: true });
    }, 1000)
  }
}