import React from 'react';
import { Button } from 'antd';

export default class Publish extends React.Component {
  state = {
    loading: false
  };

  render() {
    const containerState = this.props.container.state;
    return (
      <div id='publish-course'>
        <div className='publish-course-button-container'>
          <h1>{ containerState.courseStatusText }</h1>
          { containerState.course.status === 'Unpublished'
            ? <Button loading={ this.state.loading } onClick={ () => this.changeCourseStatus('Reviewing') } type='primary'>Submit course</Button>
            : null
          }
          { containerState.course.status === 'Reviewing'
              ? <Button loading={ this.state.loading } onClick={ () => this.changeCourseStatus('Unpublished') } type='primary'>Cancel review</Button>
              : null
          }
        </div>
      </div>
    )
  }

  changeCourseStatus = async status => {
    this.setState({ loading: true });
    await this.props.container.changeCourseStatus(this.props.navbarContainer, status);

    this.setState({ loading: false });
  }
}
