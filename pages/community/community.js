import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/community/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";

const Community = ({ forumQuestions, isRequestFromServer, forumQuestionsLength, defaultPageNumber }) => (
    <div>
      <Head>
        <title>Home Page</title>
        <style>{ globalStyle() }</style>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossOrigin="anonymous" />
      </Head>
      <CommunityComponent
        forumQuestionsLength={ forumQuestionsLength }
        defaultPageNumber={ defaultPageNumber }
        forumQuestions={ forumQuestions }
        isRequestFromServer={ isRequestFromServer } />
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
      defaultPageNumber: Number(ctx.query.page)
    }
  } catch(e) {
    console.log('render 500');
    return {};
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
