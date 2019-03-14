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
