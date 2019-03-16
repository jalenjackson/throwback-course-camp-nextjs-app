import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';
import { GraphQlMutate, GraphQlDevURI } from '../globalHelpers/axiosCalls';
import Error from "../frontend/reactComponents/globalComponents/error";

const Index = ({ courses, isRequestFromServer }) => (
    <div>
      <Head>
        <title>Home Page</title>
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
