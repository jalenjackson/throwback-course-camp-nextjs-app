import React from 'react';
import Head from 'next/head';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';
import dynamic from 'next/dynamic';
import atob from 'atob';

const ViewCourseSectionCodingChallengeComponent = dynamic(() => import('../../frontend/reactComponents/courses/viewCourseSectionCodingChallenge/index.js'), {
  ssr: false
});

const ViewCourseSectionCodingChallenge = ({ auth, course, currentVideo, currentSection, codingChallenge }) => (
    <div>
      <Head>
        <title>View Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossOrigin="anonymous" />
      </Head>
      { course
          ? <ViewCourseSectionCodingChallengeComponent
              codingChallenge={ codingChallenge }
              currentVideo={ currentVideo }
              currentSection={ currentSection }
              course={ course }
              auth={ auth } />
          : console.log('render 500')
      }
    </div>
);

ViewCourseSectionCodingChallenge.getInitialProps = async (ctx) => {
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
    course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingProject.summary
        = atob(course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingProject.summary);
    const codingChallenge = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingChallenge;
    return { course: course.data.data.singleCourse, currentVideo, currentSection, codingChallenge }
  } catch(e) {
    return { course: false }
  }
};

export default ViewCourseSectionCodingChallenge;
