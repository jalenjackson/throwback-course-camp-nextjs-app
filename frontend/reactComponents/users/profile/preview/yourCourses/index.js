import React from 'react';
import {List, Empty, Icon, Button, Pagination} from 'antd';
import { Link } from '../../../../../../routes';

export default class YourCourses extends React.Component {
  state = {
    courseSkip: 0
  };
  
  render() {
    const { auth } = this.props.container.state;
    return (
      <div>
        { this.renderYourCourses(auth.createdCourses) }
        { !auth.createdCourses || auth.createdCourses.length < 1
          ? null
          : <Pagination
              style={{ marginTop: 15 }}
              showQuickJumper
              pageSize={ 5 }
              onChange={ page => this.handlePaginationChange(page) }
              defaultCurrent={ 1 }
              total={ auth.createdCourses.length } />
        }
      </div>
    )
  }
  
  handlePaginationChange = page => {
    this.setState({ courseSkip: getSkipAmount(page) });
  };
  
  renderYourCourses = yourCourses => {
    let courses = yourCourses.slice(this.state.courseSkip, this.state.courseSkip + 5);
    if (this.state.courseSkip === 0) {
      courses = yourCourses.slice(this.state.courseSkip, 5);
    }
    if (courses && courses.length > 0) {
      return (
        <List
          size="large"
          bordered
          dataSource={ courses }
          renderItem={ yourCourse => (<List.Item style={{ cursor: 'pointer' }}>
            <Link route={ `/courses/build/${ yourCourse._id }` }>
              <div><b>{ yourCourse.status }</b>
                <p>
                  You are selling the course <a>{ yourCourse.title }</a> for ${ yourCourse.price } <br />
                  { yourCourse.studentsEnrolled
                    ? <div>{ yourCourse.studentsEnrolled } people have bought your course.</div>
                    : <div>No one has bought it yet</div>
                  }
                </p>
              </div>
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
              <Icon type="frown" /> You haven't made any courses yet
              <Link route='/teach'>
                <Button style={{ display: 'block', margin: '0 auto', marginTop: 20 }}>Go make some</Button>
              </Link>
            </span>
          }>
        </Empty>
      )
    }
  }
}

const getSkipAmount = page => {
  if (page === 1) return 0;
  return 5 * (page - 1);
};