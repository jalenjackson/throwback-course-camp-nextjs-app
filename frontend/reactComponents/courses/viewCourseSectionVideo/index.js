import React from 'react';
import { Subscribe } from 'unstated';
import Video from '../../globalComponents/video/index';
import ViewCourseContainer from './container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import SetStateForVideo from './setStateForVideo';
import { Button, Icon } from 'antd';
import Footer from '../../globalComponents/footer';
import NewQuestion from '../../globalComponents/newQuestion';
import TopProgress from '../../courses/reusableComponents/topProgress';
import { Link, Router } from '../../../../routes';
import { getNextChallenge } from "../../../../globalHelpers/getNextCourseChallenge";
import PageLoader from "../../globalComponents/pageLoader";

export default class ViewCourseSectionVideo extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        this.setState({ loaded: true });
      }, 600);
    } else {
      this.setState({ loaded: true });
    }
  }
  
  render() {
    const { course, currentVideo, currentSection, sectionIndex, videoIndex } = this.props;
    return (
      <Subscribe to={[ViewCourseContainer, NewQuestionContainer]}>
        { (container, newQuestionContainer) => (
          <div>
            { this.state.loaded
              ? <div>
                <NewQuestion { ...this.props } courseColor={ this.props.course.color } />
                <SetStateForVideo courseColor={ course.color } currentVideo={ currentVideo } container={ container } />
                { container.state.currentVideoLocation.trim() !== ''
                  ? <div>
                    <TopProgress { ...this.props } sectionIndex={ sectionIndex } videoIndex={ videoIndex } courseColor={ course.color } currentSection={ currentSection } />
                    <div className='view-course-video-container'>
                      <Video container={ container } />
                    </div>
                    <div className="video-section video-details-container">
                      <Button.Group style={{ marginLeft: 33 }}>
                        <Button
                          className='create-question-btn'
                          onClick={ () => newQuestionContainer.updateState('visibility', true) }
                          style={{ background: this.props.course.color, borderColor: 'rgb(150, 150, 150)' }} type="primary">
                          Ask A Question
                        </Button>
                        <Button
                          onClick={ () => getNextChallenge(this.props, 'video').type !== 'video'
                            ? Router.pushRoute(getNextChallenge(this.props).route)
                            : window.location.href = getNextChallenge(this.props).route }
                          className='create-question-btn'
                          type="primary">
                          Next <Icon type="arrow-right" /> { getNextChallenge(this.props).text }
                        </Button>
                      </Button.Group>
                      <h1 className='section-title'><span>Notes</span></h1>
                      <div dangerouslySetInnerHTML={{ __html: currentVideo.description }} className='video-details' />
                    </div>
                    <Footer />
                  </div>
                  : null
                }
              </div>
              : <PageLoader />
            }
          </div>
        )}
      </Subscribe>
    )
  }
}
