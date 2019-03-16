import React from 'react';
import Head from 'next/head';
import SearchComponent from '../../frontend/reactComponents/courses/search/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';
import Error from "../../frontend/reactComponents/globalComponents/error";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
        </Head>
        { !this.props.error
          ? <SearchComponent
              defaultPageNumber={ this.props.defaultPageNumber }
              totalPageCount={ this.props.totalPageCount }
              searchTerm={ this.props.searchTerm }
              searchResults={ this.props.searchResults }
              auth={ this.props.auth } />
          : <Error />
        }
      </div>
    )
  }
}

Search.getInitialProps = async (ctx) => {
  try {
    const searchTerm = ctx.query.query.split('-').join(' ');
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
  } catch(e) {
    return { error: true }
  }
};

const getSkipAmount = page => {
  if (page === 1) return 0;
  return (page - 1) * 8;
};
