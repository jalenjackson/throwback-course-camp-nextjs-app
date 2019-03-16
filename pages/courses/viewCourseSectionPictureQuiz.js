import React from 'react';
import Head from 'next/head';
import ViewCourseSectionPictureQuizComponent from '../../frontend/reactComponents/courses/viewCourseSectionPictureQuiz';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';
import { handleAuthentication } from "../../globalHelpers/handleAuthentication";
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";
import { withRouter } from 'next/router';
import {checkIfUserHasAccess} from "../helpers";

let start = false;

class ViewCourseSectionPictureQuiz extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    const { auth, course, currentVideo, currentSection, currentQuiz, videoIndex, sectionIndex, isRequestFromServer } = this.props;
    return (
      <div>
        <Head>
          <title>View Course</title>
          <style>{ globalStyle(course.color) }</style>
        </Head>
        { this.state.start ? <ViewCourseSectionPictureQuizComponent
          isRequestFromServer={ isRequestFromServer }
          currentQuiz={ currentQuiz }
          currentVideo={ currentVideo }
          currentSection={ currentSection }
          sectionIndex={ sectionIndex }
          videoIndex={ videoIndex }
          course={ course }
          auth={ auth } /> : <PageLoader /> }
      </div>
    )
  }
}

ViewCourseSectionPictureQuiz.getInitialProps = async (ctx) => {
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
    const currentQuiz = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].pictureQuiz;
    
    if (!currentQuiz) {
      return { course: false }
    }
    
    return { course: course.data.data.singleCourse, currentVideo, currentSection, currentQuiz, sectionIndex, videoIndex, isRequestFromServer }
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = courseColor => {
  return `
    body {
      background: linear-gradient(rgb(255,245,245), ${ courseColor }80);
      background-attachment: fixed;
    }
`
};

export default withRouter(ViewCourseSectionPictureQuiz);
