import React from 'react';
import Head from 'next/head';
import CourseBuilderComponent from '../../frontend/reactComponents/courses/courseBuilder/index';
import { handleAuthentication } from '../../globalHelpers/handleAuthentication';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseResponse } from '../sharedQueryCourseResponses';

export default class CourseBuilder extends React.Component {
  componentDidMount() {
    const { course, auth } = this.props;
    if (!verifyThisCourseIsTheCreatosCourse(course.creator._id, auth._id)) {
      window.location.href = '/'
    }
  }
  
  render() {
    const { course, auth, firstTime, isRequestFromServer } = this.props;
    return (
      <div>
        <Head>
          <title>Create Course</title>
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
        <CourseBuilderComponent isRequestFromServer={ isRequestFromServer } firstTime={ firstTime } course={ course } auth={ auth } />
      </div>
    )
  }
}

CourseBuilder.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    handleAuthentication(ctx);
    const courseId = ctx.query.courseId;
    const firstTime = ctx.query.newcourse;
    const course = await GraphQlMutate(GraphQlDevURI, `
    query {
      singleCourse(courseId: "${courseId}") {
        ${ courseResponse }
      }
    }
  `);
    return { course: course.data.data.singleCourse, firstTime, isRequestFromServer }
  } catch(e) {
    return typeof document === 'undefined'
      ? ctx.res.redirect('/')
      : window.location.href = '/';
  }
};

const verifyThisCourseIsTheCreatosCourse = (creatorOfCourseId, reqUserId) => {
  return creatorOfCourseId === reqUserId;
};