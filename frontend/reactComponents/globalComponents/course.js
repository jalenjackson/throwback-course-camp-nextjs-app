import React from 'react';
import {Popover, Rate, Button} from "antd";
import {Link} from "../../../routes";
import Localization from "../index/localization";
import _ from 'lodash'

export default class Course extends React.Component {
  render() {
    const { course } = this.props;
    return (
      <div style={ this.styles.slickSlide } className='slick-slide'>
        <div style={ this.styles.innerCarousel } className="inner-carousel">
          <div style={{ background: this.props.course.color }} className='top-info'>
            <h2 className="top-info-header">24 hours</h2>
          </div>
          <div className='carousel-copy'>
            <h1>{ _.truncate(course.title, { length: 30 }) }</h1>
            <p>{ _.truncate(course.summary, { length: 60 }) }</p>
            <p>{ `Taught by ` }
              <Link>{ _.truncate(course.creator.name, { length: 20 }) }</Link>
            </p>
            <a href={`/courses/category/${ _.kebabCase(course.category) }?page=1`} className="course-category">{ course.category }</a>
            <p className='price'>
              <img alt="Money icon" src="/static/icons/money.svg" />
              $20
            </p>
            <span>
              <Rate style={ this.styles.Rating } disabled defaultValue={ 5 } />
            </span>
          </div>
          <Popover content={ this.popOverContent() } title={`Purchase this course for $20`}>
            <Link to={ `/courses/view/${ this.props.course._id }` }>
              <Button style={{ background: this.props.course.color }} className='explore-button' type="primary" icon="eye">
                View Course
              </Button>
            </Link>
          </Popover>
          <img onClick={ () => this.showPreviewVideoModal(course) } alt="Preview Button" className='preview-button' src='/static/icons/video-play.svg' />
        </div>
      </div>
    )
  }
  
  popOverContent = () => (
    <div>
      <Button style={{ background: '#FFDE17', border: 'none', color: 'rgb(60,60,65)' }} type='primary'>{ Localization.CourseCarousel.Purchase }</Button>
    </div>
  );
  
  styles = {
    Rating: { float: 'right', transform: 'translate(-10px, -30px)' },
    slickSlide: { width: '350px', marginLeft: 20, height: 'auto', marginTop: 20 },
    innerCarousel: { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' },
    topInfo: { background: this.props.course.color }
  };
  
  showPreviewVideoModal = course => {
    this.props.container.updateState('videoPreviewModalVisibility', true);
    this.props.container.updateState('videoPreviewCourse', course);
    this.props.container.updateState('videoPlaying', true);
    this.props.container.updateState('currentVideoLocation', course.sections[0].videos[0].videoLocation);
    this.props.container.updateState('courseColor', course.color);
  };
}