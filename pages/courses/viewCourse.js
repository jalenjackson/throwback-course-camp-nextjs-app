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
          <title>{ this.props.course.title } | Course Camp</title>
          <meta name="description" content={ `${ this.props.course.title } only on Course Camp! ${ this.props.course.price === 0 ? 'Take this course for FREE only at Course Camp!' : 'Buy this interactive course now for only $' + this.props.course.price }!` }  />
  
          <meta itemProp="name" content={ `${ this.props.course.title } | Course Camp` } />
          <meta itemProp="description" content={ `${ this.props.course.title } only on Course Camp! ${ this.props.course.price === 0 ? 'Take this course for FREE only at Course Camp!' : 'Buy this interactive course now for only $' + this.props.course.price }!` } />
  
          <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@CourseCamp1" />
          <meta name="robots" content="noodp, noydir" />
          <meta name="twitter:title" content={ `${ this.props.course.title } | Course Camp` } />
          <meta name="twitter:description" content={ `${ this.props.course.title } only on Course Camp! ${ this.props.course.price === 0 ? 'Take this course for FREE only at Course Camp!' : 'Buy this interactive course now for only $' + this.props.course.price }!` } />
          <meta name="twitter:creator" content="@CourseCamp1" />
          <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
          <meta property="og:site_name" content="Course Camp" />
          <meta property="fb:admins" content="100014621536916" />
          <meta property="og:url" content={ `https://teamcoursecamp.com/courses/view/${ this.props.course._id }` } />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={ `${ this.props.course.title } | Course Camp` } />
          <meta property="og:description" content={ `${ this.props.course.title } only on Course Camp! ${ this.props.course.price === 0 ? 'Take this course for FREE only at Course Camp!' : 'Buy this interactive course now for only $' + this.props.course.price }!` } />
          <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
          <link href={ `https://teamcoursecamp.com/courses/view/${ this.props.course._id }` } rel="canonical" />
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