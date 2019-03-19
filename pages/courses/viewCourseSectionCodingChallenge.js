import React from 'react';
import Head from 'next/head';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';
import dynamic from 'next/dynamic';
import { handleAuthentication } from "../../globalHelpers/handleAuthentication";
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";
import {checkIfUserHasAccess} from "../helpers";
import { withRouter } from 'next/router';

const ViewCourseSectionCodingChallengeComponent = dynamic(() => import('../../frontend/reactComponents/courses/viewCourseSectionCodingChallenge/index.js'), {
  ssr: false
});

class ViewCourseSectionCodingChallenge extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    const { auth, course, currentVideo, currentSection, codingChallenge, isRequestFromServer, videoIndex, sectionIndex } = this.props;
    return (
      <div>
        <Head>
          <title>{ course.title } Coding Challenge | Course Camp</title>
          <meta name="robots" content="noindex, nofollow" />
          <style>{ globalStyle }</style>
        </Head>
        { this.state.start
          ? <ViewCourseSectionCodingChallengeComponent
            sectionIndex={ sectionIndex }
            videoIndex={ videoIndex }
            isRequestFromServer={ isRequestFromServer }
            codingChallenge={ codingChallenge }
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

ViewCourseSectionCodingChallenge.getInitialProps = async (ctx) => {
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
    const codingChallenge = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingChallenge;
    if (!codingChallenge) {
      return { course: false };
    }
    return { course: course.data.data.singleCourse, currentVideo, currentSection, codingChallenge, isRequestFromServer, sectionIndex, videoIndex }
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = `
  body {
    background: rgb(250, 250, 250);
  }
`;

export default withRouter(ViewCourseSectionCodingChallenge);
