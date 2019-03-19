import React from 'react';
import Head from 'next/head';
import ViewCourseSectionVideoComponent from '../../frontend/reactComponents/courses/viewCourseSectionVideo/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';
import { courseSections } from '../sharedQueryCourseResponses';
import {handleAuthentication} from "../../globalHelpers/handleAuthentication";
import { withRouter } from 'next/router'
import PageLoader from "../../frontend/reactComponents/globalComponents/pageLoader";
import { checkIfUserHasAccess } from '../helpers';
import Error from "../../frontend/reactComponents/globalComponents/error";

let start = false;

class ViewCourseSectionVideo extends React.Component {
  state = {
    start: false
  };
  
  componentWillMount() {
    this.setState({ start: checkIfUserHasAccess(this.props.auth, this.props.course, this.props.router) });
  }
  
  render() {
    const { auth, course, currentVideo, currentSection, sectionIndex, videoIndex } = this.props;
    return (
      <div>
        <Head>
          <title>{ course.title } | Course Camp</title>
          <meta name="robots" content="noindex, nofollow" />
          <style>{ globalStyle }</style>
        </Head>
        { course ? this.state.start
            ? <ViewCourseSectionVideoComponent
                videoIndex={ videoIndex }
                sectionIndex={ sectionIndex }
                currentVideo={ currentVideo }
                currentSection={ currentSection }
                course={ course }
                auth={ auth } />
            : <PageLoader />
          : <Error />
        }
      </div>
    )
  }
}

ViewCourseSectionVideo.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    
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
    course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].description = atob(course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].description);
    const currentSection = course.data.data.singleCourse.sections[sectionIndex];
    const currentVideo = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex];
    return {
      course: course.data.data.singleCourse,
      currentVideo,
      currentSection,
      sectionIndex,
      videoIndex,
      isRequestFromServer
    }
  } catch(e) {
    return { course: false }
  }
};

const globalStyle = `
  body {
    background: white;
  }
`;

export default withRouter(ViewCourseSectionVideo);
