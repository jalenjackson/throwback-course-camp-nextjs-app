import React from 'react'
import SectionTimelineContainer from './sectionTimeline/sectionTimelineContainer';
import SceneEditContainer from './sceneEditContainer/sceneEditContainer';
import TopProgress from './topProgress/index';
import SetInitialStateFromData from './setInitialStateFromData';
import { Subscribe } from 'unstated';
import Container from './container';
import NavbarContainer from '../../globalComponents/navbar/navbarContainer';
import Drawers from './drawers/index';

export default class CourseBuilderComponent extends React.Component {
  render() {
    return (
      <Subscribe to={[Container, NavbarContainer]}>
        { (container, navbarContainer) => (
          <div id='course-builder'>
            <SetInitialStateFromData container={ container } course={ this.props.course } />
            { Object.keys(container.state.course).length > 0
              ?
                <div>
                  { container.state.course.sections.length !== 0
                    ? <Drawers { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                    : null
                  }
                  <TopProgress { ...this.props } container={ container } />
                  <SceneEditContainer { ...this.props } navbarContainer={ navbarContainer } container={ container } />
                  <SectionTimelineContainer { ...this.props } navbarContainer={ navbarContainer } container={ container }  />
                </div>
              : null
            }
          </div>
        )}
      </Subscribe>
    )
  }
}
