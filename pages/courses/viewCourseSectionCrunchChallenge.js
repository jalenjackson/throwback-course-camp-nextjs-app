import React from 'react';
import Head from 'next/head';
import ViewCourseSectionCrunchChallengeComponent from '../../frontend/reactComponents/courses/viewCourseSectionCrunchChallenge';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';
import { handleAuthentication } from "../../globalHelpers/handleAuthentication";
import {checkIfUserHasAccess} from "../helpers";
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";
import { withRouter } from 'next/router';

class ViewCourseSectionCrunchChallenge extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    const { auth, course, currentVideo, currentSection, crunchChallenge, isRequestFromServer, sectionIndex, videoIndex } = this.props;
    return (
      <div>
        <Head>
          <title>View Course</title>
          <style>{ globalStyle }</style>
        </Head>
        { this.state.start
          ? <ViewCourseSectionCrunchChallengeComponent
            sectionIndex={ sectionIndex }
            videoIndex={ videoIndex }
            isRequestFromServer={ isRequestFromServer }
            crunchChallenge={ crunchChallenge }
            currentVideo={ currentVideo }
            currentSection={ currentSection }
            course={ course }
            auth={ auth } />
          : <PageLoader />
        }
      </div>
    )
  }
}

ViewCourseSectionCrunchChallenge.getInitialProps = async (ctx) => {
  try {
    handleAuthentication(ctx);
    const isRequestFromServer = typeof window === 'undefined';
    const { courseId, sectionIndex, videoIndex } = ctx.query;
    const course = await GraphQlMutate(GraphQlDevURI, `
    {
      singleCourse(courseId: "${ courseId }") {
        _id
        color
        title
        price
        creator {
          _id
          name
        }
        ${ courseSections }
      }
    }

  `);
    const currentSection = course.data.data.singleCourse.sections[sectionIndex];
    const currentVideo = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex];
    const crunchChallenge = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].crunchChallenge;
    
    if (!crunchChallenge) {
      return { course: false }
    }
    
    return { course: course.data.data.singleCourse, currentVideo, currentSection, crunchChallenge, isRequestFromServer, sectionIndex, videoIndex }
    
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = `
  body {
    background: rgb(250, 250, 250);
  }
`;

export default withRouter(ViewCourseSectionCrunchChallenge);
