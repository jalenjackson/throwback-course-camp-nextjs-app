import React from 'react';
import { Pagination } from 'antd';
import { getMoreCourses } from './getMoreCourses';

export default class PagePagination extends React.Component {
  render() {
    return (
      <div className='course-pagination' style={ styles().paginationContainer }>
        <Pagination
          showQuickJumper
          pageSize={8}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          onChange={ page => getMoreCourses(this.props.searchTerm, page, getSkipAmount(page), this.props.container, this.props.isAllCourses) }
          defaultCurrent={ this.props.defaultPageNumber }
          total={ this.props.totalPageCount } />
      </div>
    )
  }
}

const getSkipAmount = page => {
  if (page === 1) return 0;
  return 8 * (page - 1);
};

const styles = () => {
  return {
    paginationContainer: {
      margin: '0 auto',
      marginTop: 30,
      marginBottom: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
};