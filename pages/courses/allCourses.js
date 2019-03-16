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
          <title>View Course</title>
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
