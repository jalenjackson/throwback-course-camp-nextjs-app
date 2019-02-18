import React from 'react';
import Head from 'next/head';
import ViewCourseSectionVideoComponent from '../../frontend/reactComponents/courses/viewCourseSectionVideo/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import atob from 'atob';

const ViewCourseSectionVideo = ({ auth, course, currentVideo, currentSection }) => (
    <div>
      <Head>
        <title>View Course</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      { course ? <ViewCourseSectionVideoComponent currentVideo={ currentVideo } currentSection={ currentSection } course={ course } auth={ auth } /> : console.log('render 500') }
    </div>
);

ViewCourseSectionVideo.getInitialProps = async (ctx) => {
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
    course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].description = atob(course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex].description);
    const currentSection = course.data.data.singleCourse.sections[sectionIndex];
    const currentVideo = course.data.data.singleCourse.sections[sectionIndex].videos[videoIndex];
    return { course: course.data.data.singleCourse, currentVideo, currentSection }
  } catch(e) {
    console.log(e)
    return { course: false }
  }
};

export default ViewCourseSectionVideo;
