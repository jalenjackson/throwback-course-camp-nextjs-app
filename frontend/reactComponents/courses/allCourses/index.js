import React from 'react';
import Search from '../search/index';

export default class AllCourses extends React.Component {
  render() {
    return (
      <div>
        <Search { ...this.props } allCourses={ true } />
      </div>
    )
  }
}