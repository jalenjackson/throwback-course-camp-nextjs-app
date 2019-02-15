import React from 'react';
import List from './list';
import { Empty, Button } from 'antd';
import { navigatePane } from '../topProgress/navigatePane';

export default class ReviewSections extends React.Component {
  render () {
    const sections = this.props.container.state.course.sections;
    return (
      <div>
        { sections && sections.length > 0
          ? <List { ...this.props } />
          : <div>
            <Empty
                style={{ marginTop: 50 }}
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                description={
                  <span>You have not added any videos for your course yet</span>
                }>
              <Button onClick={ () => navigatePane(this.props, 0, 'courseBuilder') } type="primary">Build Course</Button>
            </Empty>
          </div>
        }
      </div>
    )
  }
}

