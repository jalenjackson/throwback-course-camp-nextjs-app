import React from 'react';
import Head from 'next/head';
import HelpCenterComponent from '../frontend/reactComponents/helpCenter/index';
import Error from "../frontend/reactComponents/globalComponents/error";

const HelpCenter = ({ auth, isRequestFromServer, error }) => (
  <div>
    <Head>
      <title>Home Page</title>
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
