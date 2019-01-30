import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';

const Index = () => (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <IndexComponent />
    </div>
);

Index.getInitialProps = async (req) => {
  return {}
};

export default Index;
