import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';
import { GraphQlMutate, GraphQlDevURI } from '../globalHelpers/axiosCalls';

const Index = ({ courses, isRequestFromServer }) => (
    <div>
      <Head>
        <title>Home Page</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      { courses ? <IndexComponent isRequestFromServer={ isRequestFromServer } courses={ courses } /> : console.log('This will render to future 500 error page') }
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

export default Index;
