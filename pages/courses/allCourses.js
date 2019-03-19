import React from 'react';
import Head from 'next/head';
import AllCoursesComponent from '../../frontend/reactComponents/courses/allCourses/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import Error from "../../frontend/reactComponents/globalComponents/error";

export default class AllCourses extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>All Courses | Course Camp</title>
          <meta name="description" content='All of the top interactive courses on Course Camp!'  />
  
          <meta itemProp="name" content='All Courses | Course Camp' />
          <meta itemProp="description" content='All of the top interactive courses on Course Camp!' />
  
          <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@CourseCamp1" />
          <meta name="robots" content="noodp, noydir" />
          <meta name="twitter:title" content='All Courses | Course Camp' />
          <meta name="twitter:description" content='All of the top interactive courses on Course Camp!' />
          <meta name="twitter:creator" content="@CourseCamp1" />
          <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
          <meta property="og:site_name" content="Course Camp" />
          <meta property="fb:admins" content="100014621536916" />
          <meta property="og:url" content='https://teamcoursecamp.com/all-courses?page=1' />
          <meta property="og:type" content="website" />
          <meta property="og:title" content='All Courses | Course Camp' />
          <meta property="og:description" content='All of the top interactive courses on Course Camp!' />
          <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
          <link href='https://teamcoursecamp.com/all-courses?page=1' rel="canonical" />
        </Head>
        { !this.props.error
          ? <AllCoursesComponent
            searchResults={ this.props.searchResults }
            totalPageCount={ this.props.totalPageCount }
            defaultPageNumber={ this.props.defaultPageNumber } />
          : <Error />
        }
      </div>
    )
  }
}

AllCourses.getInitialProps = async (ctx) => {
  try {
    const searchResults = await GraphQlMutate(GraphQlDevURI, `
      query {
        globalAutocomplete(term: "", limit: 8, skip: ${ getSkipAmount(ctx.query.page) }) {
          courseListLength
          courses {
            _id
            title
            description
            price
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
    const results = searchResults.data.data.globalAutocomplete;
    
    return {
      searchResults: results.courses,
      totalPageCount: Number(results.courseListLength),
      defaultPageNumber: Number(ctx.query.page),
      error: false
    }
  } catch(e) {
    return { error: true }
  }
};

const getSkipAmount = page => {
  if (page === 1) return 0;
  return (page - 1) * 8;
};
