import React from 'react';
import { Subscribe } from 'unstated';
import Video from '../../globalComponents/video/index';
import ViewCourseContainer from './container';
import NewQuestionContainer from '../../globalComponents/newQuestion/container';
import SetStateForVideo from './setStateForVideo';
import { Steps, Popover, Timeline, Button } from 'antd';
import Footer from '../../globalComponents/footer';
import NewQuestion from '../../globalComponents/newQuestion';

const Step = Steps.Step;

export default class ViewCourseSectionVideo extends React.Component {
  render() {
    const { course, currentVideo, currentSection } = this.props;
    return (
      <Subscribe to={[ViewCourseContainer, NewQuestionContainer]}>
        { (container, newQuestionContainer) => (
          <div>
            <NewQuestion { ...this.props } courseColor={ this.props.course.color } />
            <SetStateForVideo courseColor={ course.color } currentVideo={ currentVideo } container={ container } />
            { container.state.currentVideoLocation.trim() !== ''
              ? <div>
                  <div className='video-section view-course-video'>
                    <div style={{ background: course.color }} className="upper-video-section">
                      <div className='upper-video-section-steps'>
                        <Steps progressDot={ (dot, { index }) => <Popover content={
                          <Timeline>
                            <Timeline.Item>15min Video</Timeline.Item>
                            { currentSection.videos[index].quiz ? <Timeline.Item>Multiple Choice Quiz</Timeline.Item> : null }
                            { currentSection.videos[index].pictureQuiz ? <Timeline.Item>Picture Quiz</Timeline.Item> : null }
                            { currentSection.videos[index].matchingGame ? <Timeline.Item>Matching Game</Timeline.Item> : null }
                            { currentSection.videos[index].crunchChallenge ? <Timeline.Item>Crunch Challenge</Timeline.Item> : null }
                            { currentSection.videos[index].codingChallenge ? <Timeline.Item>Coding Exercise</Timeline.Item> : null }
                            { currentSection.videos[index].codingProject ? <Timeline.Item>Coding Project</Timeline.Item> : null }
                          </Timeline>
                        }>{ dot }</Popover> }>
                          { currentSection.videos.map((video) => (
                            <Step title={ video.title } />
                          )) }
                        </Steps>
                      </div>
                    </div>
                    <Video container={ container } />
                  </div>
                  <div className="video-section video-details-container">
                    <Button.Group style={{ marginLeft: 13, marginTop: 20 }}>
                      <Button
                          onClick={ () => newQuestionContainer.updateState('visibility', true) }
                          style={{ background: this.props.course.color, borderColor: 'rgb(150, 150, 150)' }} type="primary">Ask A Question</Button>
                      <Button style={{ background: this.props.course.color, borderColor: 'rgb(150, 150, 150)' }} type="primary">View Forum</Button>
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
