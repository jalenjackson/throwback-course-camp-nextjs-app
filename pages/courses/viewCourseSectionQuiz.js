import React from 'react';
import Head from 'next/head';
import ViewCourseSectionQuizComponent from '../../frontend/reactComponents/courses/viewCourseSectionQuiz/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';

const ViewCourseSectionQuiz = ({ auth, course, currentVideo, currentSection, currentQuiz }) => (
    <div>
      <Head>
        <title>View Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      { course ? <ViewCourseSectionQuizComponent currentQuiz={ currentQuiz } currentVideo={ currentVideo } currentSection={ currentSection } course={ course } auth={ auth } /> : console.log('render 500') }
    </div>
);

ViewCourseSectionQuiz.getInitialProps = async (ctx) => {
  try {
    const { courseId, sectionIndex, videoIndex } = ctx.query;
    const course = await GraphQlMutate(GraphQlDevURI, `
    {
      singleCourse(courseId: "${ courseId }") {
        color
        title
        price
        creator {
          name
        }
        sections {
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
            }
            matchingGame {
              questions {
                question
              }
            }
            codingChallenge {
              title
            }
            codingProject {
              summary
            }
            crunchChallenge {
              target
            }
          }
        }
      }
    }

  `);
    const currentSection = course.data.data.singleCourse.sections[sectionIndex];
    const currentVideo = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex];
    const currentQuiz = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].quiz;
    return { course: course.data.data.singleCourse, currentVideo, currentSection, currentQuiz }
  } catch(e) {
    return { course: false }
  }
};

export default ViewCourseSectionQuiz;
