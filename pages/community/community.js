import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/community/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";
import Error from "../../frontend/reactComponents/globalComponents/error";

const Community = ({ forumQuestions, isRequestFromServer, forumQuestionsLength, defaultPageNumber, error }) => (
    <div>
      <Head>
        <title>Home Page</title>
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
