import React from 'react';
import Head from 'next/head';
import ViewCourseSectionVideoComponent from '../../frontend/reactComponents/courses/viewCourseSectionVideo/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseSections } from '../sharedQueryCourseResponses';
import {handleAuthentication} from "../../globalHelpers/handleAuthentication";

const ViewCourseSectionVideo = ({ auth, course, currentVideo, currentSection, sectionIndex, videoIndex }) => (
    <div>
      <Head>
        <title>View Course</title>
        <style>{ globalStyle }</style>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/js/froala_editor.pkgd.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css" />
        <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.1/css/themes/dark.min.css' />
      </Head>
      { course
          ? <ViewCourseSectionVideoComponent
            videoIndex={ videoIndex }
            sectionIndex={ sectionIndex }
            currentVideo={ currentVideo }
            currentSection={ currentSection }
            course={ course }
            auth={ auth } />
          : console.log('render 500') }
    </div>
);

ViewCourseSectionVideo.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    
    handleAuthentication(ctx);
    const { courseId, sectionIndex, videoIndex } = ctx.query;
    const course = await GraphQlMutate(GraphQlDevURI, `
    {
      singleCourse(courseId: "${ courseId }") {
        _id
        color
        title
        price
        creator {
          name
        }
        ${ courseSections }
      }
    }

  `);
    course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].description = atob(course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].description);
    const currentSection = course.data.data.singleCourse.sections[sectionIndex];
    const currentVideo = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex];
    return {
      course: course.data.data.singleCourse,
      currentVideo,
      currentSection,
      sectionIndex,
      videoIndex,
      isRequestFromServer
    }
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = `
  body {
    background: white;
  }
`;

export default ViewCourseSectionVideo;
