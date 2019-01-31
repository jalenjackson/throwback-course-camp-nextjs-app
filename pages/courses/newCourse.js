import React from 'react';
import Head from 'next/head';
import NewCourseComponent from '../../frontend/reactComponents/courses/newCourse';
import { handleAuthentication } from '../../globalHelpers/handleAuthentication';

const NewCourse = ({ auth }) => (
    <div>
      <Head>
        <title>Create Course</title>
      </Head>
      <NewCourseComponent auth={ auth } />
    </div>
);

NewCourse.getInitialProps = async (ctx) => {
  handleAuthentication(ctx);
  return {}
};

export default NewCourse;
