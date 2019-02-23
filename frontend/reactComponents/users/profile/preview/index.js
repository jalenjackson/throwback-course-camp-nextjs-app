import React from 'react';
import Profile from './profile/index';
import Photo from './photo/index';
import Payout from './payout/index';
import PaymentHistory from './paymentHistory/index';
import CloseAccount from './closeAccount/index';

export default class Preview extends React.Component {
  render() {
    return (
      <div>
        <div style={styles}>
          { this.props.container.state.menuKey === 'profile'
            ? <Profile />
            : null
          }
          { this.props.container.state.menuKey === 'photo'
            ? <Photo />
            : null
          }
          { this.props.container.state.menuKey === 'payout'
            ? <Payout />
            : null
          }
          { this.props.container.state.menuKey === 'paymentHistory'
            ? <PaymentHistory />
            : null
          }
          { this.props.container.state.menuKey === 'closeAccount'
            ? <CloseAccount />
            : null
          }
        </div>
      </div>
    )
  }
}

const styles = { padding: 24, background: '#fff', minHeight: 360 };