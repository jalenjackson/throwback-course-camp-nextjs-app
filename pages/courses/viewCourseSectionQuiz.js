import React from 'react';
import Head from 'next/head';
import ViewCourseSectionQuizComponent from '../../frontend/reactComponents/courses/viewCourseSectionQuiz/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';

const ViewCourseSectionQuiz = ({ auth, course, currentVideo, currentSection, currentQuiz, sectionIndex, videoIndex }) => (
    <div>
      <Head>
        <title>View Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/js/froala_editor.pkgd.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css" />
      </Head>
      { course ? <ViewCourseSectionQuizComponent
          sectionIndex={ sectionIndex }
          videoIndex={ videoIndex }
          currentQuiz={ currentQuiz }
          currentVideo={ currentVideo }
          currentSection={ currentSection }
          course={ course }
          auth={ auth } /> : console.log('render 500') }
    </div>
);

ViewCourseSectionQuiz.getInitialProps = async (ctx) => {
  try {
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
    const currentSection = course.data.data.singleCourse.sections[sectionIndex];
    const currentVideo = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex];
    const currentQuiz = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].quiz;
    return { course: course.data.data.singleCourse, currentVideo, currentSection, currentQuiz, sectionIndex, videoIndex }
  } catch(e) {
    return { course: false }
  }
};

export default ViewCourseSectionQuiz;
