import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'unstated';
import { VerifyAuthentication } from '../globalHelpers/verifyAuthentication';
import Navbar from '../frontend/reactComponents/globalComponents/navbar/index';
import { PageTransition } from 'next-page-transitions'
import NProgress from 'nprogress'
import '../static/styles/application.less';
import '../static/styles/global.less';
import '../frontend/reactComponents/users/less/modals.less';
import '../frontend/reactComponents/index/index.less';
import '../frontend/reactComponents/globalComponents/navbar/index.less';
import '../frontend/reactComponents/courses/newCourse/index.less';
import '../frontend/reactComponents/courses/courseBuilder/less/index.less';
import '../frontend/reactComponents/courses/viewCourse/less/index.less';
import '../frontend/reactComponents/courses/viewCourseSectionVideo/less/index.less';
import '../frontend/reactComponents/globalComponents/video/less/index.less'
import '../frontend/reactComponents/courses/viewCourseSectionQuiz/less/index.less';
import '../frontend/reactComponents/courses/viewCourseSectionMatchingGame/index.less';
import '../frontend/reactComponents/courses/viewCourseSectionCrunchChallenge/index.less';
import '../frontend/reactComponents/courses/viewCourseSectionCodingProject/index.less';
import '../frontend/reactComponents/courses/viewCourseSectionCodingChallenge/index.less';
import '../frontend/reactComponents/earnMoneyTeaching/less/index.less';
import '../static/styles/npprogress.less';

import Router from 'next/router';
NProgress.configure({ easing: 'linear', speed: 500, trickleSpeed: 200, trickle: true });

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
});

Router.events.on('routeChangeError', () => NProgress.done());

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
        <PageTransition timeout={ 300 } classNames="page-transition">
          <Provider>
            <Navbar auth={ auth } />
            <Component {...pageProps} auth={ auth } />
          </Provider>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0.4;
            transform: translate3d(0, 40px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: transform 300ms cubic-bezier(.12,1,.8,.97), opacity 300ms ease-in-out;
          }
          .page-transition-exit {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
          .page-transition-exit-active {
            opacity: 0.7;
            transform: translate3d(0, 40px, 0);
            transition: opacity 300ms cubic-bezier(.12,1,.8,.97), transform 300ms cubic-bezier(.12,1,.8,.97);
          }
        `}</style>
      </Container>
    )
  }
}
