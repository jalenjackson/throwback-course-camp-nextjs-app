import React from 'react';
import { Subscribe } from 'unstated';
import Video from '../../globalComponents/video/index';
import ViewCourseContainer from './container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import SetStateForVideo from './setStateForVideo';
import { Button } from 'antd';
import Footer from '../../globalComponents/footer';
import NewQuestion from '../../globalComponents/newQuestion';
import TopProgress from '../../courses/reusableComponents/topProgress';

export default class ViewCourseSectionVideo extends React.Component {
  render() {
    const { course, currentVideo, currentSection, sectionIndex, videoIndex } = this.props;
    return (
      <Subscribe to={[ViewCourseContainer, NewQuestionContainer]}>
        { (container, newQuestionContainer) => (
          <div>
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
                        className='create-question-btn'
                        onClick={ () => newQuestionContainer.updateState('visibility', true) }
                        type="primary">
                        Take Quiz
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
        )}
      </Subscribe>
    )
  }
}
