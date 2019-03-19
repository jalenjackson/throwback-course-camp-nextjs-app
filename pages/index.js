import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';
import { GraphQlMutate, GraphQlDevURI } from '../globalHelpers/axiosCalls';
import Error from "../frontend/reactComponents/globalComponents/error";

const Index = ({ courses, isRequestFromServer }) => (
    <div>
      <Head>
        <title>Innovate For The Future | Course Camp</title>
        <meta name="description" content='Learn a skill, or teach others to learn a skill.
        At Course Camp you can create highly interactive courses that will ensure success for the student.
        You can add quizzes, picture quizzes, matching games, coding challenges, coding projects, and crunch challenges to
        every video in every section. The possibilities are endless!'  />
  
        <meta itemProp="name" content='Course Camp | Innovate For The Future' />
        <meta itemProp="description" content='Learn a skill, or teach others to learn a skill.
        At Course Camp you can create highly interactive courses that will ensure success for the student.
        You can add quizzes, picture quizzes, matching games, coding challenges, coding projects, and crunch challenges to
        every video in every section. The possibilities are endless!' />
        
        <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CourseCamp1" />
        <meta name="robots" content="noodp, noydir" />
        <meta name="twitter:title" content='Course Camp | Innovate For The Future' />
        <meta name="twitter:description" content='Learn a skill, or teach others to learn a skill.
        At Course Camp you can create highly interactive courses that will ensure success for the student.
        You can add quizzes, picture quizzes, matching games, coding challenges, coding projects, and crunch challenges to
        every video in every section. The possibilities are endless!' />
        <meta name="twitter:creator" content="@CourseCamp1" />
        <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
        <meta property="og:site_name" content="Course Camp" />
        <meta property="fb:admins" content="100014621536916" />
        <meta property="og:url" content='https://teamcoursecamp.com' />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='Course Camp | Innovate For The Future' />
        <meta property="og:description" content='Learn a skill, or teach others to learn a skill.
        At Course Camp you can create highly interactive courses that will ensure success for the student.
        You can add quizzes, picture quizzes, matching games, coding challenges, coding projects, and crunch challenges to
        every video in every section. The possibilities are endless!' />
        <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
        <link href='https://teamcoursecamp.com' rel="canonical" />
        <style>{ globalStyle }</style>
      </Head>
      { courses
        ? <IndexComponent isRequestFromServer={ isRequestFromServer } courses={ courses } />
        : <Error />
      }
    </div>
);

Index.getInitialProps = async () => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    
    const courses = await GraphQlMutate(GraphQlDevURI, `
    query {
      courses(limit: 10) {
        rating
        reviews {
          userId {
            name
          }
          rating
          description
        }
        publishedCourse {
          _id
          title
          description
          price
          category
          rating
          sections {
            videos {
              videoLocation
            }
          }
          color
          summary
          creator {
            name
          }
        }
      }
    }
  `);
    const coursesResponse = courses.data.data.courses;
    return { courses: coursesResponse, isRequestFromServer }
  } catch (e) {
    return { courses: false }
  }
};

const globalStyle = `
  body {
    background: white;
  }
`;

export default Index;
