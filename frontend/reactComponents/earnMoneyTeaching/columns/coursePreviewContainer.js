import React from 'react';

const CoursePreviewContainer = () => (
  <div className="course-preview-container">
    <img className='course-preview-container-bg-img' src="/static/backgroundImages/course-categories.svg" />
    <img className='course-preview-container-bg-img course-preview-container-bg-img-2' src="/static/backgroundImages/course-categories.svg" />
    <h1 className="course-builder-preview-title">
      <span>Powerful</span> And <span>Easy</span> To Use Course Builder
    </h1>
    <div className="course-builder-preview">
      <video src='/static/videos/coursePreview.mp4' loop autoPlay muted />
    </div>
  </div>
);

export default CoursePreviewContainer;