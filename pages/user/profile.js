import React from 'react';
import Head from 'next/head';
import ProfileComponent from '../../frontend/reactComponents/users/profile';
import { handleAuthentication } from '../../globalHelpers/handleAuthentication';
import Error from "../../frontend/reactComponents/globalComponents/error";

const Profile = ({ auth, isRequestFromServer, error }) => (
  <div>
    <Head>
      <title>Home Page</title>
    </Head>
    { !error
      ? <ProfileComponent isRequestFromServer={ isRequestFromServer } auth={ auth } />
      : <Error />
    }
  </div>
);

Profile.getInitialProps = async ctx => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    handleAuthentication(ctx);
    return { isRequestFromServer, error: false };
  } catch(e) {
    return { error: true }
  }
};

export default Profile;
