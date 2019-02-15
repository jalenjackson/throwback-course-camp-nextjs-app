import React from 'react';
import Head from 'next/head';
import CourseBuilderComponent from '../../frontend/reactComponents/courses/courseBuilder/index';
import { handleAuthentication } from '../../globalHelpers/handleAuthentication';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';

const CourseBuilder = ({ auth, course }) => (
    <div>
      <Head>
        <title>Create Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/js/froala_editor.pkgd.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css" />
        <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.1/css/themes/dark.min.css' />
      </Head>
      { course ? <CourseBuilderComponent course={ course } auth={ auth } /> : console.log('render 500') }
    </div>
);

CourseBuilder.getInitialProps = async (ctx) => {
  try {
    handleAuthentication(ctx);
    const courseId = ctx.query.courseId;
    const course = await GraphQlMutate(GraphQlDevURI, `
    query {
      singleCourse(courseId: "${courseId}") {
        _id
        color
        title
        description
        category
        status
        sections {
          title
          description
          category
          videos {
            title
            description
            videoLocation
            quiz {
              question
              answers
            }
            pictureQuiz {
              question
              answers
            }
            matchingGame {
              questions {
                question
                matchId
              }
              answers {
                answer
                matchId
              }
            }
            crunchChallenge {
              target
              definitions
            }
            codingChallenge {
              title
              description	
              functionName
              functionParams
              addedFunctionParams
              startingFunctionText
              returnValue
            }
            codingProject {
              summary
            }
          }
        }
      }
    }
  `);
    return { course: course.data.data.singleCourse }
  } catch(e) {
    return { course: false }
  }
};

export default CourseBuilder;
