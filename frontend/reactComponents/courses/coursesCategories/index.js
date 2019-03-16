import React from 'react';
import Footer from "../../globalComponents/footer";
import Search from '../search/index';

export default class Courses extends React.Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  
  render() {
    return (
      <div className="course-categories">
        <Search { ...this.props } fromCategory={ true } />
        <Footer />
      </div>
    )
  }
}