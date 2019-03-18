import React from 'react';
import Head from 'next/head';
import ViewCourseComponent from '../../frontend/reactComponents/courses/viewCourse/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';
import { didTheUserCreateThisCourse, userPaidForCourseAlready } from "../helpers";
import Error from "../../frontend/reactComponents/globalComponents/error";

export default class ViewCourse extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
        </Head>
        { this.props.course
          ? <ViewCourseComponent
              didTheUserCreateThisCourse={ this.props.auth.authenticated
                ? didTheUserCreateThisCourse(this.props.course.creator._id, this.props.auth._id)
                : false
              }
              rating={ this.props.rating }
              userPaidForCourseAlready={ userPaidForCourseAlready(this.props.auth, this.props.course) }
              course={ this.props.course }
              reviews={ this.props.reviews }
              auth={ this.props.auth }
              isRequestFromServer={ this.props.isRequestFromServer } />
          : <Error /> }
      </div>
    )
  }
}

ViewCourse.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    const courseId = ctx.query.courseId;
    const course = await GraphQlMutate(GraphQlDevURI, `
    query {
      singleCourse(courseId: "${ courseId }") {
        rating
        reviews {
          userId {
            name
            profileImage
          }
          rating
          description
        }
        publishedCourse {
          ${ courseResponse }
        }
      }
    }
  `);
    const reviews = course.data.data.singleCourse.reviews;
    const rating = course.data.data.singleCourse.rating;
    const singleCourse = course.data.data.singleCourse.publishedCourse;
    if (!singleCourse) {
      return typeof document === 'undefined'
        ? ctx.res.redirect('/')
        : window.location.href = '/';
    }
    singleCourse.description = atob(singleCourse.description);
    return {
      reviews,
      rating,
      course: singleCourse,
      isRequestFromServer
    }
  } catch(e) {
    return { course: false }
  }
};