import React from 'react';
import Head from 'next/head';
import CourseCategoriesComponent from '../../frontend/reactComponents/courses/coursesCategories/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";

const CourseCategories = ({ auth, searchResults, searchTerm, totalPageCount, defaultPageNumber }) => (
  <div>
    <Head>
      <title>Create Course</title>
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
    <CourseCategoriesComponent
      searchResults={ searchResults }
      searchTerm={ searchTerm }
      totalPageCount={ totalPageCount }
      defaultPageNumber={ defaultPageNumber }
      auth={ auth } />
  </div>
);

CourseCategories.getInitialProps = async ctx => {
  try {
    const searchTerm = ctx.query.category.split('-').join(' ');
    const searchResults = await GraphQlMutate(GraphQlDevURI, `
      query {
        globalAutocomplete(term: "${ searchTerm }", limit: 8, skip: ${ getSkipAmount(ctx.query.page) }) {
          courseListLength
          courses {
            _id
            title
            description
            price
            rating
            category
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
    
    const results = searchResults.data.data.globalAutocomplete;
    
    return {
      searchResults: results.courses,
      searchTerm,
      totalPageCount: Number(results.courseListLength),
      defaultPageNumber: Number(ctx.query.page),
    }
  } catch (e) {
    return { courses: false }
  }
};

const getSkipAmount = page => {
  if (page === 1) return 0;
  return (page - 1) * 8;
};

export default CourseCategories;
