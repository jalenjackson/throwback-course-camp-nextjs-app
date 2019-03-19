import React from 'react';
import Head from 'next/head';
import ForgotPasswordComponent from '../../frontend/reactComponents/users/forgotPassword/index';
import Error from "../../frontend/reactComponents/globalComponents/error";
import { GraphQlDevURI, GraphQlMutate } from "../../globalHelpers/axiosCalls";

const ForgotPassword = ({ token, error, isRequestFromServer, userId }) => (
  <div>
    <Head>
      <title>Home Page</title>
    </Head>
    { !error
      ? <ForgotPasswordComponent userId={ userId } isRequestFromServer={ isRequestFromServer } />
      : <Error />
    }
  </div>
);

ForgotPassword.getInitialProps = async ctx => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    
    const getUser = await GraphQlMutate(GraphQlDevURI, `
      query {
        findUserByForgotPassword(token: "${ ctx.query.token }") {
          _id
        }
      }
    `);
    
    const userId = getUser.data.data.findUserByForgotPassword._id;
    
    return { isRequestFromServer, error: false, userId };
  } catch(e) {
    console.log(e)
    return typeof document === 'undefined'
      ? ctx.res.redirect('/')
      : window.location.href = '/';
  }
};

export default ForgotPassword;
