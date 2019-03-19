import React from 'react';
import Head from 'next/head';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import { courseSections } from '../sharedQueryCourseResponses';
import dynamic from 'next/dynamic';
import atob from 'atob';
import {checkIfUserHasAccess} from "../helpers";
import { handleAuthentication } from "../../globalHelpers/handleAuthentication";
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";
import { withRouter } from 'next/router';

const ViewCourseSectionCodingProjectComponent = dynamic(() => import('../../frontend/reactComponents/courses/viewCourseSectionCodingProject'), {
  ssr: false
});

class ViewCourseSectionCodingProject extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    const { auth, course, currentVideo, currentSection, codingProject, videoIndex, sectionIndex } = this.props;
    return (
      <div>
        <Head>
          <title>{ course.title } Coding Project | Course Camp</title>
          <meta name="robots" content="noindex, nofollow" />
          <style>{ globalStyle }</style>
        </Head>
        { this.state.start
          ? <ViewCourseSectionCodingProjectComponent
              sectionIndex={ sectionIndex }
              videoIndex={ videoIndex }
              codingProject={ codingProject }
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

ViewCourseSectionCodingProject.getInitialProps = async (ctx) => {
  try {
    handleAuthentication(ctx);
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
    course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingProject.summary
        = atob(course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingProject.summary);
    const codingProject = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].codingProject;
    
    if (!codingProject) {
      return { course: false }
    }
    
    return { course: course.data.data.singleCourse, currentVideo, currentSection, codingProject, sectionIndex, videoIndex }
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = `
  body {
    background: rgb(250, 250, 250);
  }
`;

export default withRouter(ViewCourseSectionCodingProject);
