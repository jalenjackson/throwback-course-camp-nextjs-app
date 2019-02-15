import React from 'react'
import SectionTimelineContainer from './sectionTimeline/sectionTimelineContainer';
import SceneEditContainer from './sceneEditContainer/sceneEditContainer';
import TopProgress from './topProgress/index';
import SetInitialStateFromData from './setInitialStateFromData';
import { Subscribe } from 'unstated';
import Container from './container';
import NavbarContainer from '../../globalComponents/navbar/navbarContainer';
import Drawers from './drawers/index';
import ReviewSections from './reviewSections/index';
import ReviewCourseDetails from './reviewCourseDetails/index';
import Publish from './publish/index'

export default class CourseBuilderComponent extends React.Component {
  render() {
    return (
      <Subscribe to={[Container, NavbarContainer]}>
        { (container, navbarContainer) => (
          <div id='course-builder'>
            <SetInitialStateFromData container={ container } course={ this.props.course } />
            <TopProgress { ...this.props } container={ container } />
            { Object.keys(container.state.course).length > 0
              ?
                container.state.currentPane === 'courseBuilder' ?
                  <div>
                    { container.state.course.sections.length !== 0
                      ? <Drawers { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                      : null
                    }
                    <SceneEditContainer { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                    <SectionTimelineContainer { ...this.props } navbarContainer={ navbarContainer } container={ container }  />
                  </div>
                  : container.state.currentPane === 'reviewSections' ?
                      <ReviewSections { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                    : container.state.currentPane === 'publish' ?
                      <Publish { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                      : container.state.currentPane === 'reviewCourseDetails' ?
                        <ReviewCourseDetails { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                          : null
              : null
            }
          </div>
        )}
      </Subscribe>
    )
  }
}
