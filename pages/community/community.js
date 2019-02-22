import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/index';

const Community = () => (
    <div>
      <Head>
        <title>Home Page</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
      </Head>
      <CommunityComponent />
    </div>
);

Community.getInitialProps = async () => {
  return {};
};

export default Community;
