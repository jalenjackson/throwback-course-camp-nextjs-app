import React from 'react';
import AddNewSectionButton from './addNewSectionButton';
import SectionList from './sectionList';

const SectionTimelineContainer = props => (
  <div className='video-timeline'>
    <div className='scenes-wrap'>
      { props.container.state.course.sections.length > 0
          ? <SectionList { ...props } />
          : null
      }
      <AddNewSectionButton { ...props } />
    </div>
  </div>
);

export default SectionTimelineContainer;
