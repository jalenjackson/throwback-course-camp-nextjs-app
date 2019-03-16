import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/communityQuestion/index';
import { GraphQlDevURI, GraphQlMutate } from '../../globalHelpers/axiosCalls';
import Error from "../../frontend/reactComponents/globalComponents/error";

const CommunityQuestion = ({ forumQuestion, auth, isRequestFromServer, error }) => (
  <div>
    <Head>
      <title>Home Page</title>
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
