import React from 'react';
import {Collapse, Empty, Icon, Pagination} from "antd";

const Panel = Collapse.Panel;

export default class PayoutHistory extends React.Component {
  state = {
    courseSkip: 0,
    size: 10
  };
  
  render() {
    const payoutHistory = this.props.container.state.auth.payoutHistory;
    return (
      <div>
        { this.renderPayout(payoutHistory) }
        { !payoutHistory || payoutHistory.length < 1
          ? null
          : <Pagination
              style={{ marginTop: 15 }}
              showQuickJumper
              pageSize={ this.state.size }
              onChange={ page => this.handlePaginationChange(page) }
              defaultCurrent={ 1 }
              total={ payoutHistory.length } />
        }
      </div>
    )
  }
  
  handlePaginationChange = page => {
    this.setState({ courseSkip: this.getSkipAmount(page) });
  };
  
  renderPayout = payoutHistory => {
    let history = payoutHistory.slice(this.state.courseSkip, this.state.courseSkip + this.state.size);
    if (this.state.courseSkip === 0) {
      history = payoutHistory.slice(this.state.courseSkip, this.state.size);
    }
    
    if (history && history.length > 0) {
      return (
        <Collapse>
          { history.map((payout, i) => (
            <Panel header={`You transferred $${ payout.amount } to the paypal account ${ payout.emailAddressReceiver }`} key={ i }>
              <p>Reference Id: { payout.payoutBatchId }</p>
            </Panel>
          ))
          }
        </Collapse>
      )
    } else {
      return (
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          description={
            <span>
              You haven't transferred any money yet
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