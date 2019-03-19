import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/communityQuestion/index';
import { GraphQlDevURI, GraphQlMutate } from '../../globalHelpers/axiosCalls';
import Error from "../../frontend/reactComponents/globalComponents/error";

const CommunityQuestion = ({ forumQuestion, auth, isRequestFromServer, error }) => (
  <div>
    <Head>
      <title>{ forumQuestion.title } | Course Camp</title>
      <meta name="description" content={ forumQuestion.body }  />
  
      <meta itemProp="name" content={ `${ forumQuestion.title } | Course Camp` } />
      <meta itemProp="description" content={ forumQuestion.body } />
  
      <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CourseCamp1" />
      <meta name="robots" content="noodp, noydir" />
      <meta name="twitter:title" content={ `${ forumQuestion.title } | Course Camp` } />
      <meta name="twitter:description" content={ forumQuestion.body } />
      <meta name="twitter:creator" content="@CourseCamp1" />
      <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
      <meta property="og:site_name" content="Course Camp" />
      <meta property="fb:admins" content="100014621536916" />
      <meta property="og:url" content={ `https://teamcoursecamp.com/community/${ forumQuestion._id }` } />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ `${ forumQuestion.title } | Course Camp` } />
      <meta property="og:description" content={ forumQuestion.body } />
      <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
      <link href={ `https://teamcoursecamp.com/community/${ forumQuestion._id }` } rel="canonical" />
      <style>{ globalStyle() }</style>
    </Head>
    { !error
      ? <CommunityComponent auth={ auth } forumQuestion={ forumQuestion } isRequestFromServer={ isRequestFromServer } />
      : <Error />
    }
  </div>
);

CommunityQuestion.getInitialProps = async ctx => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    const forumQuestion = await GraphQlMutate(GraphQlDevURI, `
      {
        singleForumQuestion(forumQuestionId: "${ ctx.query.questionId }") {
          _id
          title
          date
          body
          answers {
            userId {
              name
              profileImage
            }
            date
            answer
          }
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
  `);
    return { forumQuestion: forumQuestion.data.data.singleForumQuestion, isRequestFromServer, error: false }
  } catch(e) {
    return { error: true }
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

export default CommunityQuestion;
