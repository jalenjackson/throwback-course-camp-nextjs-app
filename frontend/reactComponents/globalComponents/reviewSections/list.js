import React from 'react';
import Element from './element';
import { Button, Empty } from 'antd';
import { navigatePane } from "../../courses/courseBuilder/topProgress/navigatePane";

export default class List extends React.Component {
  render() {
    const sections = this.props.courseNotInState
      ? this.props.course.sections
      : this.props.container.state.course.sections;
    return (
      <div style={{ marginTop: 50 }}>
        { this.renderPaths(sections) }
        <div style={{ marginBottom: 40 }} className='section-completion'>
          <img src='/static/icons/trophy.svg' />
          <h1>Course Completion</h1>
        </div>
      </div>
    )
  }

  renderPaths(sections) {
    return sections.map((section, i) => (
      <div>
        <div id='course-track-element-container'>
          <h1 style={{ transform: 'translate(23px, 13px)', fontSize: 16, display: 'block' }}>{ section.title ? section.title : 'No title added for this section' }</h1>
          { section.videos && section.videos.length > 0
            ? section.videos.map((video, j) => (
              <div>
                <Element sectionIndex={ i } videoIndex={ j } type={ 'video' } video={ video } { ...this.props }  />
                { i === section.videos.length - 1
                  ? null
                  : <div className='divider video-dividers'/>
                }
              </div>
            ))
            : <Empty
                style={{ paddingBottom: 50 }}
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                description={
                  <span>You have not added any videos for your course yet</span>
                }>
                <Button onClick={ () => navigatePane(this.props, 0, 'courseBuilder') } type="primary">Build Course</Button>
              </Empty>
          }
        </div>
        <div className='divider'/>
      </div>
    ))
  }
}
