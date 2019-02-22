import React from 'react';
import Head from 'next/head';
import EarnMoneyTeachingComponent from '../frontend/reactComponents/earnMoneyTeaching/index';

const EarnMoneyTeaching = () => (
    <div>
      <Head>
        <title>Home Page</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      <EarnMoneyTeachingComponent />
    </div>
);

EarnMoneyTeaching.getInitialProps = async () => {
  return {};
};

export default EarnMoneyTeaching;
