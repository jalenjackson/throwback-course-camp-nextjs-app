import React from 'react';
import { Link } from "../../../../routes";
import Course from '../../globalComponents/course';
import Footer from "../../globalComponents/footer";
import Pluralize from 'pluralize';
import IndexContainer from '../../index/container';
import SearchContainer from './container';
import { Subscribe } from "unstated";
import VideoPreviewModal from '../../index/videoPreviewModal';
import TweenMax, { Power3 } from 'gsap/TweenMax';
import Loader from "../../globalComponents/loader";
import PagePagination from '../../globalComponents/pagination/index';
import InitiateCourses from './initiateCourses';
import {BarLoader} from "react-spinners";
import { Empty, Button } from 'antd';

export default class Search extends React.Component {
  state = {
    loaded: false,
    pageCount: 0
  };
  
  async componentDidMount() {
    await this.setState({ loaded: true });
    TweenMax.to('.search-copy h1', 0.5, { transform: 'translate3d(0, 0, 0)', opacity: '1', ease: Power3.easeOut, delay: 0.5 });
    _.times(this.props.searchResults.length,i => {
      TweenMax.to(`.inner-course-map-${ i }`, 0.5, { transform: 'translate3d(0, 0, 0)', opacity: '1', ease: Power3.easeOut, delay: 0.35 + (i * 0.1)  });
    });
  }
  
  render() {
    return (
      <Subscribe to={[SearchContainer, IndexContainer]}>
        { (container, indexContainer) => (
          <div>
            <InitiateCourses container={ container } searchResults={ this.props.searchResults } />
            { this.state.loaded
              ?
                <div>
                  { container.state.searchResults.length > 0
                    ? <div>
                        <div className='pagination-loader'>
                        </div>
                        <div className='search-copy'>
                          { this.props.allCourses
                            ? <h1>All Courses</h1>
                            : <h1>{ this.props.totalPageCount } { Pluralize( 'result', this.props.totalPageCount ) } for { this.props.searchTerm }</h1>
                          }
                        </div>
                        <div style={ styles } id="courses-container">
                          <div className="courses-text-container">
                            <div className='ant-carousel'>
                              <div style={{ width: '90%' }} className='column-layout-course-wrapper'>
                                { container.state.searchResults.map((course, i) => (
                                  <div className={`inner-course-map inner-course-map-${ i }`}>
                                    <Course container={ indexContainer } course={ course } />
                                  </div>
                                )) }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='pagination-bar-loader'>
                            <BarLoader color={'#846DB1'} />
                          </div>
                          <PagePagination
                            isAllCourses={ this.props.allCourses }
                            container={ container }
                            searchTerm={ this.props.searchTerm }
                            totalPageCount={ this.props.totalPageCount }
                            defaultPageNumber={ this.props.defaultPageNumber } />
                        </div>
                        <VideoPreviewModal container={ indexContainer } />
                        <Footer />
                      </div>
                    : <div style={{ marginTop: 50 }}>
                        <Empty
                          style={{ marginBottom: 150 }}
                          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                          description={
                            <span>
                              No Courses Matching { this.props.searchTerm }
                            </span>
                          }>
                          <Button onClick={ () => $('.ant-input').focus() }>Search For Another Course</Button>
                        </Empty>
                      </div>
                  }
                </div>
              
              
              : <Loader />
            }
          </div>
        ) }
      </Subscribe>
    )
  }
}

const styles = { opacity: '1', transform: 'translate3d(0, 0, 0)', margin: 0, height: 800 };