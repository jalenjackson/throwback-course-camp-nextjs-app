import React from 'react';
import Head from 'next/head';
import SearchComponent from '../../frontend/reactComponents/courses/search/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';

export default class Search extends React.Component {
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
          ? <SearchComponent
            course={ this.props.course }
            auth={ this.props.auth } />
          : console.log('render 500') }
      </div>
    )
  }
}

Search.getInitialProps = async (ctx) => {
  try {
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
    return { course: course.data.data.singleCourse }
  } catch(e) {
    return { course: false }
  }
};
