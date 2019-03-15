import React from 'react';
import { List, Empty, Icon, Pagination } from 'antd';
import { Link } from '../../../../../../routes';

export default class PurchasedCourses extends React.Component {
  state = {
    courseSkip: 0,
    size: 10
  };
  
  render() {
    const { auth } = this.props.container.state;
    return (
      <div>
        { this.renderPaidCourses(auth.paidCourses) }
        { !auth.paidCourses || auth.paidCourses.length < 1
          ? null
          : <Pagination
              style={{ marginTop: 15 }}
              showQuickJumper
              pageSize={ this.state.size }
              onChange={ page => this.handlePaginationChange(page) }
              defaultCurrent={ 1 }
              total={ auth.paidCourses.length } />
        }
      </div>
    )
  }
  
  handlePaginationChange = page => {
    this.setState({ courseSkip: this.getSkipAmount(page) });
  };
  
  renderPaidCourses = paidCourses => {
    let courses = paidCourses.slice(this.state.courseSkip, this.state.courseSkip + this.state.size);
    if (this.state.courseSkip === 0) {
      courses = paidCourses.slice(this.state.courseSkip, this.state.size);
    }
    
    if (courses && courses.length > 0) {
      return (
        <List
          size="large"
          bordered
          dataSource={ courses }
          renderItem={paidCourse => (<List.Item style={{ cursor: 'pointer' }}>
            <Link route={ `/courses/view/${ paidCourse._id }` }>
              <a>
                ${ paidCourse.price } { paidCourse.title }
              </a>
            </Link>
          </List.Item>)}
        />
      )
    } else {
      return (
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          description={
            <span>
              <Icon type="frown" /> You haven't bought any courses yet
            </span>
          }>
        </Empty>
      )
    }
  };
  
  getSkipAmount = page => {
    if (page === 1) return 0;
    return this.state.size * (page - 1);
  };
}