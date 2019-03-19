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
          <title>{ this.props.totalPageCount } Search Results For { this.props.searchTerm } | Course Camp</title>
          <meta name="description" content={ `Top 10 ${ this.props.searchTerm } interactive courses on Course Camp!` }  />
  
          <meta itemProp="name" content={ `${ this.props.totalPageCount } Search Results For ${ this.props.searchTerm } | Course Camp` } />
          <meta itemProp="description" content={ `Top 10 ${ this.props.searchTerm } interactive courses on Course Camp!` } />
  
          <meta itemProp="image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@CourseCamp1" />
          <meta name="robots" content="noodp, noydir" />
          <meta name="twitter:title" content={ `${ this.props.totalPageCount } Search Results For ${ this.props.searchTerm } | Course Camp` } />
          <meta name="twitter:description" content={ `Top 10 ${ this.props.searchTerm } interactive courses on Course Camp!` } />
          <meta name="twitter:creator" content="@CourseCamp1" />
          <meta name="twitter:image:src" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
  
          <meta property="og:site_name" content="Course Camp" />
          <meta property="fb:admins" content="100014621536916" />
          <meta property="og:url" content={ `https://teamcoursecamp.com/courses/search/${ this.props.searchTerm }?page=1` } />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={ `${ this.props.totalPageCount } Search Results For ${ this.props.searchTerm } | Course Camp` } />
          <meta property="og:description" content={ `Top 10 ${ this.props.searchTerm } interactive courses on Course Camp!` } />
          <meta property="og:image" content='https://s3.amazonaws.com/course-camp-misc/logo.png' />
          <link href={ `https://teamcoursecamp.com/courses/search/${ this.props.searchTerm }?page=1` } rel="canonical" />
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
