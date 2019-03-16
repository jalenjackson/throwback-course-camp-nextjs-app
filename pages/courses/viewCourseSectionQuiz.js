import React from 'react';
import Head from 'next/head';
import ViewCourseSectionQuizComponent from '../../frontend/reactComponents/courses/viewCourseSectionQuiz/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';
import {handleAuthentication} from "../../globalHelpers/handleAuthentication";
import {checkIfUserHasAccess} from "../helpers";
import { withRouter } from 'next/router';
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";

let start = false;

class ViewCourseSectionQuiz extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    const { auth, course, currentVideo, currentSection, currentQuiz, sectionIndex, videoIndex, isRequestFromServer } = this.props;
    return (
      <div>
        <Head>
          <title>View Course</title>
          <style>{ globalStyle(course.color) }</style>
        </Head>
        { this.state.start
          ? <ViewCourseSectionQuizComponent
              isRequestFromServer={ isRequestFromServer }
              sectionIndex={ sectionIndex }
              videoIndex={ videoIndex }
              currentQuiz={ currentQuiz }
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

ViewCourseSectionQuiz.getInitialProps = async (ctx) => {
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
    const currentQuiz = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].quiz;
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

export default withRouter(ViewCourseSectionQuiz);
