import React from 'react';
import Head from 'next/head';
import CourseBuilderComponent from '../../frontend/reactComponents/courses/courseBuilder/index';
import { handleAuthentication } from '../../globalHelpers/handleAuthentication';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseResponse } from '../sharedQueryCourseResponses';
import Error from "../../frontend/reactComponents/globalComponents/error";

export default class CourseBuilder extends React.Component {
  componentDidMount() {
    const { course, auth } = this.props;

    if (!verifyThisCourseIsTheCreatosCourse(course.creator._id, auth._id)) {
      window.location.href = '/'
    }
  }
  
  render() {
    const { course, auth, firstTime, isRequestFromServer, error } = this.props;
    return (
      <div>
        <Head>
          <title>Create Course</title>
        </Head>
        { !error
          ? <CourseBuilderComponent isRequestFromServer={ isRequestFromServer } firstTime={ firstTime } course={ course } auth={ auth } />
          : <Error />
        }
      </div>
    )
  }
}

CourseBuilder.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    handleAuthentication(ctx);
    const courseId = ctx.query.courseId;
    const course = await GraphQlMutate(GraphQlDevURI, `
    query {
      singleCourse(courseId: "${courseId}", ignorePublished: "true") {
        ${ courseResponse }
      }
    }
  `);
    return { course: course.data.data.singleCourse, isRequestFromServer, error: false }
  } catch(e) {
    return { error: true }
  }
};

const verifyThisCourseIsTheCreatosCourse = (creatorOfCourseId, reqUserId) => {
  return creatorOfCourseId === reqUserId;
};