import React from 'react';
import Head from 'next/head';
import NewCourseComponent from '../../frontend/reactComponents/courses/newCourse/index';
import { handleAuthentication } from '../../globalHelpers/handleAuthentication';
import Error from "../../frontend/reactComponents/globalComponents/error";

const NewCourse = ({ auth, isRequestFromServer, error }) => (
    <div>
      <Head>
        <title>Create Course</title>
        <style>{ globalStyle() }</style>
      </Head>
      { !error
        ? <NewCourseComponent auth={ auth } isRequestFromServer={ isRequestFromServer } />
        : <Error />
      }
    </div>
);

NewCourse.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    handleAuthentication(ctx);
    return { isRequestFromServer, error: false }
  } catch {
    return { error: true }
  }
};

const globalStyle = () => {
  return `
    body {
      background: #EDEFF0;
      background-attachment: fixed;
    }
`
};

export default NewCourse;
