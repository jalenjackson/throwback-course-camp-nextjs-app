import React from 'react';
import Head from 'next/head';
import ProfileComponent from '../../frontend/reactComponents/user/profile';

const Profile = () => (
  <div>
    <Head>
      <title>Home Page</title>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"
              integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
              crossOrigin="anonymous" />
    </Head>
    <ProfileComponent />
  </div>
);

Profile.getInitialProps = async () => {
  return {};
};

export default Profile;
