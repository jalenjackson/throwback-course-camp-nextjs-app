import React from 'react';
import Head from 'next/head';
import IndexComponent from '../frontend/reactComponents/index/index';
import { GraphQlMutate, GraphQlDevURI } from '../globalHelpers/axiosCalls';
import Error from "../frontend/reactComponents/globalComponents/error";

const Index = ({ courses, isRequestFromServer }) => (
    <div>
      <Head>
        <title>Home Page</title>
        <style>{ globalStyle }</style>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/js/froala_editor.pkgd.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css" />
        <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.1/css/themes/dark.min.css' />
      </Head>
      { courses
        ? <IndexComponent isRequestFromServer={ isRequestFromServer } courses={ courses } />
        : <Error />
      }
    </div>
);

Index.getInitialProps = async () => {
  try {
    const isRequestFromServer = typeof window === 'undefined';
    
    const courses = await GraphQlMutate(GraphQlDevURI, `
    query {
      courses(limit: 10) {
        rating
        reviews {
          userId {
            name
          }
          rating
          description
        }
        publishedCourse {
          _id
          title
          description
          price
          category
          rating
          sections {
            videos {
              videoLocation
            }
          }
          color
          summary
          creator {
            name
          }
        }
      }
    }
  `);
    const coursesResponse = courses.data.data.courses;
    return { courses: coursesResponse, isRequestFromServer }
  } catch (e) {
    return { courses: false }
  }
};

const globalStyle = `
  body {
    background: white;
  }
`;

export default Index;
