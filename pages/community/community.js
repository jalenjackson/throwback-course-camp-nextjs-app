import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/community/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";
import Error from "../../frontend/reactComponents/globalComponents/error";

const Community = ({ forumQuestions, isRequestFromServer, forumQuestionsLength, defaultPageNumber, error }) => (
    <div>
      <Head>
        <title>Community | Course Camp</title>
        <meta name="description" content='Top questions asked by students on Course Camp'  />
  
        <meta itemProp="name" content='Community | Course Camp' />
        <meta itemProp="description" content='Top questions asked by students on Course Camp' />
  
        <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CourseCamp1" />
        <meta name="robots" content="noodp, noydir" />
        <meta name="twitter:title" content='Community | Course Camp' />
        <meta name="twitter:description" content='Top questions asked by students on Course Camp' />
        <meta name="twitter:creator" content="@CourseCamp1" />
        <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
        <meta property="og:site_name" content="Course Camp" />
        <meta property="fb:admins" content="100014621536916" />
        <meta property="og:url" content='https://teamcoursecamp.com/community' />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='Community | Course Camp' />
        <meta property="og:description" content='Top questions asked by students on Course Camp' />
        <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
        <link href='https://teamcoursecamp.com/community' rel="canonical" />
        <style>{ globalStyle() }</style>
      </Head>
      { !error
        ? <CommunityComponent
          forumQuestionsLength={ forumQuestionsLength }
          defaultPageNumber={ defaultPageNumber }
          forumQuestions={ forumQuestions }
          isRequestFromServer={ isRequestFromServer } />
        : <Error />
      }
    </div>
);

Community.getInitialProps = async (ctx) => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    const forumQuestions = await GraphQlMutate(GraphQlDevURI, `
      {
        forumQuestions(limit: 5, skip: ${ getSkipAmount(ctx.query.page) }) {
          forumQuestionLength
          forumQuestions {
            _id
            title
            body
            date
            exercise
            sectionIndex
            videoIndex
            course {
              title
              color
              sections {
                title
                videos {
                  title
                }
              }
            }
            creator {
              _id
              name
              profileImage
            }
          }
      }
    }
  `);
    return {
      forumQuestions: forumQuestions.data.data.forumQuestions.forumQuestions,
      forumQuestionsLength: forumQuestions.data.data.forumQuestions.forumQuestionLength,
      isRequestFromServer,
      defaultPageNumber: Number(ctx.query.page),
      error: false
    }
  } catch(e) {
    return { error: true };
  }
};

const globalStyle = () => {
  return `
    body {
      background: #EDEFF0);
      background-attachment: fixed;
    }
`
};

const getSkipAmount = page => {
  if (page === 1) return 0;
  return (page - 1) * 5;
};

export default Community;
