import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';
import { GraphQlMutate, GraphQlDevURI } from '../globalHelpers/axiosCalls';

const Index = ({ courses }) => (
    <div>
      <Head>
        <title>Home Page</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      { courses ? <IndexComponent courses={ courses } /> : console.log('This will render to future 500 error page') }
    </div>
);

Index.getInitialProps = async () => {
  try {
    const courses = await GraphQlMutate(GraphQlDevURI, `
    query {
      courses {
        title
        description
        price
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
  `);
    return { courses: courses.data.data.courses }
  } catch (e) {
    return { courses: false }
  }
};

export default Index;
