import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'unstated';
import { VerifyAuthentication } from '../globalHelpers/verifyAuthentication';
import Navbar from '../frontend/reactComponents/globalComponents/navbar/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NProgress from 'nprogress'
import Head from "next/head";
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
import '../frontend/reactComponents/helpCenter/index.less';

import Router from 'next/router';
import Error from "../frontend/reactComponents/globalComponents/error";

NProgress.configure({ easing: 'linear', speed: 500, trickleSpeed: 200, trickle: true });

Router.events.on('routeChangeStart', () => {
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
    let err = false;
    let statusCode = 200;
    if (ctx.res) {
      statusCode = ctx.res.statusCode;
    }
    if (statusCode !== 200) {
      err = true;
    }
    const auth = await VerifyAuthentication(ctx);
    return { pageProps, auth, err }
  }

  render () {
    const { Component, pageProps, auth, err } = this.props;
    
    return (
      <Container>
        <Head>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/js/froala_editor.pkgd.min.js" />
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js" />
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js" />
          <script src="//cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css" />
          <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.1/css/themes/dark.min.css' />
        </Head>
        <Provider>
          <div>
            <Navbar auth={ auth } />
            { !err
              ? <TransitionGroup>
                  <CSSTransition
                    key={ this.props.router.route }
                    timeout={ 550 }
                    classNames="page">
                    <Component {...pageProps} auth={ auth } />
                  </CSSTransition>
                </TransitionGroup>
              : <Error notFound={ true } />
            }
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

