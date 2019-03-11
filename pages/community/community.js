import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/community/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";

const Community = ({ forumQuestions }) => (
    <div>
      <Head>
        <title>Home Page</title>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossOrigin="anonymous" />
      </Head>
      <CommunityComponent forumQuestions={ forumQuestions } />
    </div>
);

Community.getInitialProps = async () => {
  try {
    const forumQuestions = await GraphQlMutate(GraphQlDevURI, `
      {
        forumQuestions {
        _id
        title
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
        }
      }
    }
  `);
    console.log(forumQuestions.data.data)
    return { forumQuestions: forumQuestions.data.data.forumQuestions }
  } catch(e) {
    console.log(e);
    return {};
  }
};

export default Community;
