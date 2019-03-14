import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'unstated';
import { VerifyAuthentication } from '../globalHelpers/verifyAuthentication';
import Navbar from '../frontend/reactComponents/globalComponents/navbar/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NProgress from 'nprogress'
import '../frontend/globalResources/styles/application.less';
import '../frontend/globalResources/styles/global.less';
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
import '../frontend/reactComponents/community/community/index.less';
import '../frontend/reactComponents/courses/coursesCategories/index.less';
import '../frontend/reactComponents/courses/search/index.less';
import '../frontend/reactComponents/globalComponents/reviewCourse/less/index.less';
import '../frontend/reactComponents/courses/reusableComponents/index.less';
import '../frontend/reactComponents/courses/track/index.less';
import '../frontend/globalResources/styles/npprogress.less';

import Router from 'next/router';
NProgress.configure({ easing: 'linear', speed: 500, trickleSpeed: 200, trickle: true });

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
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
        <Provider>
          <div>
            <Navbar auth={ auth } />
            <TransitionGroup>
              <CSSTransition
                key={this.props.router.route}
                timeout={550}
                classNames="page">
            <Component {...pageProps} auth={ auth } />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </Provider>
        
        <style jsx global>{`
          .page-enter {
            opacity: 0.65;
            transform: translate3d(0, 100px, 0);
          }
          .page-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: transform 550ms cubic-bezier(.12,1,.8,.97), opacity 550ms ease-in-out;
          }
          .page-exit {
            display: block;
          }
          .page-exit.page-exit-active {
            display: none;
          }
        `}</style>
      </Container>
    )
  }
}

