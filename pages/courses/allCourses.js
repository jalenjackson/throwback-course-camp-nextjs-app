import React from 'react';
import Head from 'next/head';
import AllCoursesComponent from '../../frontend/reactComponents/courses/allCourses/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';

export default class AllCourses extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                  crossOrigin="anonymous" />
        </Head>
        <AllCoursesComponent
          searchResults={ this.props.searchResults }
          totalPageCount={ this.props.totalPageCount }
          defaultPageNumber={ this.props.defaultPageNumber } />
      </div>
    )
  }
}

AllCourses.getInitialProps = async (ctx) => {
  try {
    const searchResults = await GraphQlMutate(GraphQlDevURI, `
      query {
        globalAutocomplete(term: "", limit: 8, skip: skip: ${ getSkipAmount(ctx.query.page) }) {
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
      defaultPageNumber: Number(ctx.query.page)
    }
  } catch(e) {
    return { course: false }
  }
};

const getSkipAmount = page => {
  if (page === 1) return 0;
  return (page - 1) * 8;
};
