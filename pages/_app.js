import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'unstated';
import { VerifyAuthentication } from '../globalHelpers/verifyAuthentication';
import Navbar from '../frontend/reactComponents/globalComponents/navbar/index';
import '../static/styles/application.less';
import '../static/styles/global.less';
import '../frontend/reactComponents/users/less/modals.less';
import '../frontend/reactComponents/index/index.less';
import '../frontend/reactComponents/globalComponents/navbar/index.less';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const auth = await VerifyAuthentication(ctx);
    return { pageProps, auth }
  }

  render () {
    const { Component, pageProps, auth } = this.props;

    return (
      <Container>
        <Provider>
          <Navbar auth={ auth } />
          <Component {...pageProps} auth={ auth } />
        </Provider>
      </Container>
    )
  }
}
