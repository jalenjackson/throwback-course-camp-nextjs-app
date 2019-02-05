import React from 'react';
import AddNewSectionButton from './AddNewSectionButton';
import SectionList from './SectionList';

const SectionTimelineContainer = (props) => (
  <div className='video-timeline'>
    <div className='scenes-wrap'>
      <SectionList { ...props } />
      <AddNewSectionButton { ...props } />
    </div>
  </div>
);

export default SectionTimelineContainer;
