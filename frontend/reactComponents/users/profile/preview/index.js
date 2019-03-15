import React from 'react';
import Profile from './profile/index';
import Photo from './photo/index';
import PayoutHistory from './payoutHistory/index';
import CloseAccount from './closeAccount/index';
import YourCourses from "./yourCourses";
import PurchasedCourses from "./purchasedCourses";

export default class Preview extends React.Component {
  render() {
    return (
      <div id='preview-item'>
        <div style={styles}>
          { this.props.container.state.menuKey === 'profile'
            ? <Profile { ...this.props } />
            : null
          }
          { this.props.container.state.menuKey === 'photo'
            ? <Photo { ...this.props } />
            : null
          }
          { this.props.container.state.menuKey === 'your-courses'
            ? <YourCourses { ...this.props } />
            : null
          }
          { this.props.container.state.menuKey === 'purchased-courses'
            ? <PurchasedCourses { ...this.props } />
            : null
          }
          { this.props.container.state.menuKey === 'paymentHistory'
            ? <PaymentHistory { ...this.props } />
            : null
          }
          { this.props.container.state.menuKey === 'payoutHistory'
            ? <PayoutHistory { ...this.props } />
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