import React from 'react';
import Head from 'next/head';
import EarnMoneyTeachingComponent from '../frontend/reactComponents/earnMoneyTeaching/index';
import Error from "../frontend/reactComponents/globalComponents/error";

const EarnMoneyTeaching = ({ auth, isRequestFromServer, error }) => (
    <div>
      <Head>
        <title>Home Page</title>
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
