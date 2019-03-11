import React from 'react';
import { Button } from 'antd';

export default class Publish extends React.Component {
  state = {
    loading: false
  };

  render() {
    const containerState = this.props.container.state;
    return (
      <div style={{ marginBottom: 100 }} id='publish-course'>
        <div className='publish-course-button-container'>
          { containerState.course.status === 'Approved'
            ? <div>
                <img style={{ width: 100, display: 'block', margin: '0 auto', paddingTop: 40, height: 'auto' }} src='/static/icons/happy-face.svg' />
              </div>
            : null
          }
          <h1>{ containerState.courseStatusText }</h1>
          { containerState.course.status === 'Unpublished'
            ? <Button loading={ this.state.loading } onClick={ () => this.changeCourseStatus('Reviewing') } type='primary'>Submit course</Button>
            : null
          }
          { containerState.course.status === 'Reviewing'
              ? <Button loading={ this.state.loading } onClick={ () => this.changeCourseStatus('Unpublished') } type='primary'>Cancel review</Button>
              : null
          }
          { containerState.course.status === 'NotApproved'
            ? <Button loading={ this.state.loading } onClick={ () => this.changeCourseStatus('Reviewing') } type='primary'>Resubmit for review</Button>
            : null
          }
          { containerState.course.status === 'Approved'
            ? <Button loading={ this.state.loading } onClick={ () => this.changeCourseStatus('Reviewing') } type='primary'>Resubmit for review</Button>
            : null
          }
        </div>
      </div>
    )
  }

  changeCourseStatus = async status => {
    this.setState({ loading: true });
    await this.props.container.changeCourseStatus(this.props.auth, status);

    this.setState({ loading: false });
  }
}
