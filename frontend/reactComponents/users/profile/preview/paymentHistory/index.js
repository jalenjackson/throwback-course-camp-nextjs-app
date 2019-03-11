import React from 'react';
import { Collapse, Button } from 'antd';

const Panel = Collapse.Panel;

export default class PaymentHistory extends React.Component {
  render() {
    return (
      <div>
        { this.renderPaymentHistory() }
      </div>
    )
  }
  
  renderPaymentHistory = () => (
    <Collapse>
      { this.props.container.state.auth.paidCourses.map((paidCourse, i) => (
        <Panel header={`You piad $${ paidCourse.price } for the ${ paidCourse.title }`} key={ i }>
          <Button>Go To Course</Button>
        </Panel>
      ))
      }
    </Collapse>
  )
}