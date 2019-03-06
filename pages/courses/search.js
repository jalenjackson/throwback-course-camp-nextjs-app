import React from 'react';
import Head from 'next/head';
import SearchComponent from '../../frontend/reactComponents/courses/search/index';
import { GraphQlMutate, GraphQlDevURI } from '../../globalHelpers/axiosCalls';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>View Course</title>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                  crossOrigin="anonymous" />
        </Head>
        <SearchComponent
          defaultPageNumber={ this.props.defaultPageNumber }
          totalPageCount={ this.props.totalPageCount }
          searchTerm={ this.props.searchTerm }
          searchResults={ this.props.searchResults }
          auth={ this.props.auth } />
      </div>
    )
  }
}

Search.getInitialProps = async (ctx) => {
  try {
    const searchTerm = ctx.query.query.split('-').join(' ');
    console.log(ctx.query);
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
