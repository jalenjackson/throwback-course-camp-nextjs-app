import React from 'react';
import Head from 'next/head';
import EndCourseComponent from '../../frontend/reactComponents/courses/endCourse/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseResponse } from '../sharedQueryCourseResponses';
import {handleAuthentication} from "../../globalHelpers/handleAuthentication";
import {checkIfUserHasAccess} from "../helpers";
import { withRouter } from 'next/router';
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";

class EndCourse extends React.Component {
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
          <title>End Course | Course Camp</title>
          <meta name="robots" content="noindex, nofollow" />
          <style>{ globalStyle }</style>
        </Head>
        { this.state.start
          ? <EndCourseComponent
            isRequestFromServer={ this.props.isRequestFromServer }
            course={ this.props.course }
            auth={ this.props.auth } />
          : <PageLoader /> }
      </div>
    )
  }
}

EndCourse.getInitialProps = async (ctx) => {
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
    background: #9881B1;
  }
`;

export default withRouter(EndCourse);