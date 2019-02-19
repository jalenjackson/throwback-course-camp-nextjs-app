import React from 'react';
import Head from 'next/head';
import ViewCourseComponent from '../../frontend/reactComponents/courses/viewCourse/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';

const ViewCourse = ({ auth, course }) => (
    <div>
      <Head>
        <title>View Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      { course ? <ViewCourseComponent course={ course } auth={ auth } /> : console.log('render 500') }
    </div>
);

ViewCourse.getInitialProps = async (ctx) => {
  try {
    const courseId = ctx.query.courseId;
    const course = await GraphQlMutate(GraphQlDevURI, `
    query {
      singleCourse(courseId: "${ courseId }") {
        ${ courseResponse }
      }
    }
  `);
    course.data.data.singleCourse.description = atob(course.data.data.singleCourse.description);
    return { course: course.data.data.singleCourse }
  } catch(e) {
    return { course: false }
  }
};

export default ViewCourse;
