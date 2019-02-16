import React from 'react';
import { Collapse, Timeline, Button } from 'antd';
import atob from 'atob';

const Panel = Collapse.Panel;

const Sections = props => (
  <React.Fragment>
    <h1 className="section-title">
      <span>Course Sections</span>
    </h1>
    { sections(props) }
  </React.Fragment>
);

const sections = props => {
  return props.course.sections.map((section) => (
    <div>
      <div className="course-section">
        <div style={{ background: props.course.color }} className='top-bar'>
          <h1 className='course-section-title'>{ section.title }</h1>
        </div>
        <div className="course-section-collapse">
          <Collapse>
            <Panel header="Description" key="1">
              <div style={{ width: '90%', display: 'block', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: atob(section.description) }} />
            </Panel>
            <Panel header="10 Videos" key="2">
              { section.videos && section.videos.length > 0 ? section.videos.map((video, i) => (
                <Collapse style={{ marginTop: 5 }}>
                  <Panel header={ video.title ? video.title : `Video ${ i + 1 }` } key={ i }>
                    <Timeline>
                      <Timeline.Item>15min instructional video</Timeline.Item>
                      <Timeline.Item>Quiz</Timeline.Item>
                      <Timeline.Item>Picture Quiz</Timeline.Item>
                      <Timeline.Item>Matching Game</Timeline.Item>
                    </Timeline>
                    <Button type="primary">Preview</Button>
                  </Panel>
                </Collapse>
              )) : null }
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className='divider' />
    </div>
  ))
};

export default Sections;
