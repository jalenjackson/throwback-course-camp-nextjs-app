import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';
import { GraphQlMutate, GraphQlDevURI } from '../globalHelpers/axiosCalls';

const Index = ({ courses }) => (
    <div>
      <Head>
        <title>Home Page</title>
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
    console.log(e)
    return { courses: false }
  }
};

export default Index;
