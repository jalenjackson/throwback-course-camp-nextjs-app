import React from 'react';
import Head from 'next/head';
import CourseCategoriesComponent from '../../frontend/reactComponents/courses/coursesCategories/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";
import Error from "../../frontend/reactComponents/globalComponents/error";

const CourseCategories = ({ auth, searchResults, searchTerm, totalPageCount, defaultPageNumber, error }) => (
  <div>
    <Head>
      <title>Create Course</title>
    </Head>
    { !error
      ? <CourseCategoriesComponent
          searchResults={ searchResults }
          searchTerm={ searchTerm }
          totalPageCount={ totalPageCount }
          defaultPageNumber={ defaultPageNumber }
          auth={ auth } />
      : <Error />
    }
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
      error: false
    }
  } catch (e) {
    return { error: true }
  }
};

const getSkipAmount = page => {
  if (page === 1) return 0;
  return (page - 1) * 8;
};

export default CourseCategories;
