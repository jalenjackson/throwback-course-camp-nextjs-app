import React from 'react';
import { Collapse } from "antd";

const Panel = Collapse.Panel;

export default class PayoutHistory extends React.Component {
  render() {
    return (
      <div>
        { this.renderPayout() }
      </div>
    )
  }
  
  renderPayout = () => (
    <Collapse>
      { this.props.container.state.auth.payoutHistory.map((payout, i) => (
          <Panel header={`You transferred $${ payout.amount } to the paypal account ${ payout.emailAddressReceiver }`} key={ i }>
            <p>Reference Id: { payout.payoutBatchId }</p>
          </Panel>
        ))
      }
    </Collapse>
  )
}