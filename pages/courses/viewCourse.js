import React from 'react';
import Head from 'next/head';
import ViewCourseComponent from '../../frontend/reactComponents/courses/viewCourse/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';

export default class ViewCourse extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                  crossOrigin="anonymous" />
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
        { this.props.course
          ? <ViewCourseComponent
              didTheUserCreateThisCourse={ this.props.auth.authenticated
                ? didTheUserCreateThisCourse(this.props.course.creator._id, this.props.auth._id)
                : false
              }
              userPaidForCourseAlready={ userPaidForCourseAlready(this.props.auth, this.props.course) }
              course={ this.props.course }
              auth={ this.props.auth }
              isRequestFromServer={ this.props.isRequestFromServer } />
          : console.log('render 500') }
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
        creator {
          _id
          name
        }
        ${ courseResponse }
      }
    }
  `);
    const singleCourse = course.data.data.singleCourse;
    singleCourse.description = atob(singleCourse.description);
    return {
      course: course.data.data.singleCourse,
      isRequestFromServer
    }
  } catch(e) {
    return { course: false }
  }
};

const userPaidForCourseAlready = (auth, course) => {
  if (auth.authenticated && auth.paidCourses) {
    return auth.paidCourses.find(c => c._id === course._id ) !== undefined;
  }
};

const didTheUserCreateThisCourse = (userIdFromCourse, userId) => {
  return userIdFromCourse === userId;
};