import React from 'react';
import Head from 'next/head';
import EarnMoneyTeachingComponent from '../frontend/reactComponents/earnMoneyTeaching/index';
import Error from "../frontend/reactComponents/globalComponents/error";

const EarnMoneyTeaching = ({ auth, isRequestFromServer, error }) => (
    <div>
      <Head>
        <title>Earn Money Teaching | Course Camp</title>
        <meta name="description" content='No matter who you are, everyone has a something beneficial to teach. Why not do it for money?'  />
        
        <meta itemProp="name" content='Course Camp | Earn Money Teaching' />
        <meta itemProp="description" content='No matter who you are, everyone has a something beneficial to teach. Why not do it for money?' />
        <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CourseCamp1" />
        <meta name="robots" content="noodp, noydir" />
        <meta name="twitter:title" content='Course Camp | Earn Money Teaching' />
        <meta name="twitter:description" content='No matter who you are, everyone has a something beneficial to teach. Why not do it for money?' />
        <meta name="twitter:creator" content="@CourseCamp1" />
        <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
        <meta property="og:site_name" content="Course Camp" />
        <meta property="fb:admins" content="100014621536916" />
        <meta property="og:url" content='https://teamcoursecamp.com/teach' />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='Course Camp | Earn Money Teaching' />
        <meta property="og:description" content='No matter who you are, everyone has a something beneficial to teach. Why not do it for money?' />
        <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
        <link href='https://teamcoursecamp.com/teach' rel="canonical" />
      </Head>
      { !error
        ? <EarnMoneyTeachingComponent auth={ auth } isRequestFromServer={ isRequestFromServer } />
        : <Error />
      }
    </div>
);

EarnMoneyTeaching.getInitialProps = async () => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    return { isRequestFromServer, error: false };
  } catch(e) {
    return { error: true }
  }
};

export default EarnMoneyTeaching;
