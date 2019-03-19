import React from 'react';
import Head from 'next/head';
import CourseCategoriesComponent from '../../frontend/reactComponents/courses/coursesCategories/index';
import {GraphQlDevURI, GraphQlMutate} from "../../globalHelpers/axiosCalls";
import Error from "../../frontend/reactComponents/globalComponents/error";

const CourseCategories = ({ auth, searchResults, searchTerm, totalPageCount, defaultPageNumber, error, searchTermWithKabob }) => (
  <div>
    <Head>
      <title>{ searchTerm } Courses | Course Camp</title>
      <meta name="description" content={ `Top 10 ${ searchTerm } interactive courses only on Course Camp!` }  />
  
      <meta itemProp="name" content={ `${ searchTerm } Courses | Course Camp` } />
      <meta itemProp="description" content={ `Top 10 ${ searchTerm } interactive courses only on Course Camp!` } />
  
      <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CourseCamp1" />
      <meta name="robots" content="noodp, noydir" />
      <meta name="twitter:title" content={ `${ searchTerm } Courses | Course Camp` } />
      <meta name="twitter:description" content={ `Top 10 ${ searchTerm } interactive courses only on Course Camp!` } />
      <meta name="twitter:creator" content="@CourseCamp1" />
      <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
      <meta property="og:site_name" content="Course Camp" />
      <meta property="fb:admins" content="100014621536916" />
      <meta property="og:url" content={ `https://teamcoursecamp.com/courses/category/${ searchTermWithKabob }?page=1` } />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ `${ searchTerm } Courses | Course Camp` } />
      <meta property="og:description" content={ `Top 10 ${ searchTerm } interactive courses only on Course Camp!` }  />
      <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
      <link href={ `https://teamcoursecamp.com/courses/category/${ searchTermWithKabob }?page=1` } rel="canonical" />
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
    const searchTermWithKabob = ctx.query.category;
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
      error: false,
      searchTermWithKabob
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
