import React from 'react';
import Head from 'next/head';
import TrackComponent from '../../frontend/reactComponents/courses/track/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';
import {handleAuthentication} from "../../globalHelpers/handleAuthentication";
import {checkIfUserHasAccess} from "../helpers";
import { withRouter } from 'next/router';
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";

class Track extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
          <style>{ globalStyle }</style>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                  crossOrigin="anonymous" />
        </Head>
        { this.state.start
          ? <TrackComponent
            isRequestFromServer={ this.props.isRequestFromServer }
            course={ this.props.course }
            auth={ this.props.auth } />
          : <PageLoader /> }
      </div>
    )
  }
}

Track.getInitialProps = async (ctx) => {
  try {
    handleAuthentication(ctx);
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
    course.data.data.singleCourse.description = atob(course.data.data.singleCourse.description);
    return { course: course.data.data.singleCourse, isRequestFromServer }
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = `
  body {
    background: rgb(250, 250, 250);
  }
`;

export default withRouter(Track);