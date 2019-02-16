import React from 'react'
import Sections from './columns/sections';
import Language from './columns/language';
import BuyCourse from './columns/buyCourse';
import Instructor from './columns/intructor';
import Learning from './columns/learning';
import Completion from './columns/completion';
import RightCourseDetails from './rightCourseDetails';
import Footer from '../../globalComponents/footer';

const ViewCourseComponent = props => (
  <div id='view-course'>
    <div className="course-sections-container">
      <div id='course-sections'>
        <BuyCourse { ...props } />
        <Language { ...props }/>
        <Instructor { ...props } />
        <Learning { ...props } />
        <Sections { ...props } />
        <Completion { ...props } />
      </div>
    </div>
    <RightCourseDetails { ...props } />
    <Footer />
  </div>
);

export default ViewCourseComponent;
