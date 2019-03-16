import React from 'react'
import SectionTimelineContainer from './sectionTimeline/sectionTimelineContainer';
import SceneEditContainer from './sceneEditContainer/sceneEditContainer';
import TopProgress from './topProgress/index';
import SetInitialStateFromData from './setInitialStateFromData';
import { Subscribe } from 'unstated';
import CourseBuilderContainer from './container';
import Drawers from './drawers/index';
import ReviewSections from '../../globalComponents/reviewSections';
import ReviewCourseDetails from './reviewCourseDetails/index';
import Publish from './publish/index'
import Footer from "../../globalComponents/footer";
import FirstTime from './firstTimeModal'
import {BarLoader} from "react-spinners";

export default class CourseBuilderComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({loaded: true});
      }, 600);
    } else {
      await this.setState({loaded: true});
    }
  }
  
  render() {
    return (
      <Subscribe to={[CourseBuilderContainer]}>
        { container => (
          <div id='course-builder'>
            { this.state.loaded
              ? <div>
                  { this.props.firstTime ? <FirstTime /> : null }
                  <SetInitialStateFromData container={ container } course={ this.props.course } />
                  <TopProgress { ...this.props } container={ container } />
                  { Object.keys(container.state.course).length > 0
                    ?
                    container.state.currentPane === 'courseBuilder' ?
                      <div>
                        { container.state.course.sections.length !== 0
                          ? <Drawers { ...this.props } container={ container } />
                          : null
                        }
                        <SceneEditContainer { ...this.props } container={ container } />
                        <SectionTimelineContainer { ...this.props } container={ container }  />
                      </div>
                      : container.state.currentPane === 'reviewSections' ?
                      <ReviewSections { ...this.props } container={ container } />
                      : container.state.currentPane === 'publish' ?
                        <Publish { ...this.props } container={ container } />
                        : container.state.currentPane === 'reviewCourseDetails' ?
                          <ReviewCourseDetails { ...this.props } container={ container } />
                          : null
                    : null
                  }
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
