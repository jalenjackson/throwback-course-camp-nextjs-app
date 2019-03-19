import React from 'react';
import Head from 'next/head';
import HelpCenterComponent from '../frontend/reactComponents/helpCenter/index';
import Error from "../frontend/reactComponents/globalComponents/error";

const HelpCenter = ({ auth, isRequestFromServer, error }) => (
  <div>
    <Head>
      <title>Help Center | Course Camp</title>
      <meta name="description" content='Everything there is to know about Course Camp'  />
  
      <meta itemProp="name" content='Course Camp | Help Center' />
      <meta itemProp="description" content='Everything there is to know about Course Camp' />
  
      <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CourseCamp1" />
      <meta name="robots" content="noodp, noydir" />
      <meta name="twitter:title" content='Course Camp | Help Center' />
      <meta name="twitter:description" content='Everything there is to know about Course Camp' />
      <meta name="twitter:creator" content="@CourseCamp1" />
      <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
      <meta property="og:site_name" content="Course Camp" />
      <meta property="fb:admins" content="100014621536916" />
      <meta property="og:url" content='https://teamcoursecamp.com/help-center' />
      <meta property="og:type" content="website" />
      <meta property="og:title" content='Course Camp | Help Center' />
      <meta property="og:description" content='Everything there is to know about Course Camp' />
      <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
      <link href='https://teamcoursecamp.com/help-center' rel="canonical" />
    </Head>
    { !error
      ? <HelpCenterComponent auth={ auth } isRequestFromServer={ isRequestFromServer } />
      : <Error />
    }
  </div>
);

HelpCenter.getInitialProps = async () => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    return { isRequestFromServer, error: false };
  } catch(e) {
    return { error: true }
  }
};

export default HelpCenter;
