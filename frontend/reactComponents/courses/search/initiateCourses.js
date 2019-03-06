import React from 'react';
import {getMoreCourses} from "../../globalComponents/pagination/getMoreCourses";

export default class InitiateCourses extends React.Component {
  componentWillMount() {
    this.props.container.updateState('searchResults', this.props.searchResults)
  }
  
  render() {
    return (
      <React.Fragment />
    )
  }
}