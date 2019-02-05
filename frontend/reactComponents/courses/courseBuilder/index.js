import React from 'react'
import SectionTimelineContainer from './sectionTimeline/SectionTimelineContainer';
import SceneEditContainer from './sceneEditContainer/SceneEditContainer';
import Modals from './modals/Modals';
import { Subscribe } from 'unstated';
import Container from './container';

export default class CourseBuilderComponent extends React.Component {
  render() {
    return (
      <Subscribe to={[Container]}>
        { container => (
          <div id='course-builder'>
            <SceneEditContainer { ...this.props } container={ container } />
            <SectionTimelineContainer { ...this.props } container={ container }  />
            <Modals { ...this.props } container={ container } />
          </div>
        )}
      </Subscribe>
    )
  }
}
