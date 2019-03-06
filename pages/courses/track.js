import React from 'react';
import Head from 'next/head';
import TrackComponent from '../../frontend/reactComponents/courses/track/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';

export default class Track extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                  crossOrigin="anonymous" />
        </Head>
        { this.props.course
          ? <TrackComponent
            isRequestFromServer={ this.props.isRequestFromServer }
            course={ this.props.course }
            auth={ this.props.auth } />
          : console.log('render 500') }
      </div>
    )
  }
}

Track.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    
    const courseId = ctx.query.courseId;
    const course = await GraphQlMutate(GraphQlDevURI, `
    query {
      singleCourse(courseId: "${ courseId }") {
        creator {
          name
        }
        ${ courseResponse }
      }
    }
  `);
    course.data.data.singleCourse.description = atob(course.data.data.singleCourse.description);
    return { course: course.data.data.singleCourse, isRequestFromServer }
  } catch(e) {
    return { course: false }
  }
};
