import React from 'react';
import Head from 'next/head';
import ViewCourseSectionCodingProjectComponent from '../../frontend/reactComponents/courses/viewCourseSectionCodingProject';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';

const ViewCourseSectionCodingProject = ({ auth, course, currentVideo, currentSection, codingProject }) => (
    <div>
      <Head>
        <title>View Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossOrigin="anonymous" />
      </Head>
      { course
          ? <ViewCourseSectionCodingProjectComponent
              codingProject={ codingProject }
              currentVideo={ currentVideo }
              currentSection={ currentSection }
              course={ course }
              auth={ auth } />
          : console.log('render 500')
      }
    </div>
);

ViewCourseSectionCodingProject.getInitialProps = async (ctx) => {
  try {
    const { courseId, sectionIndex, videoIndex } = ctx.query;
    const course = await GraphQlMutate(GraphQlDevURI, `
    {
      singleCourse(courseId: "${ courseId }") {
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
    const codingProject = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingProject;
    return { course: course.data.data.singleCourse, currentVideo, currentSection, codingProject }
  } catch(e) {
    return { course: false }
  }
};

export default ViewCourseSectionCodingProject;
