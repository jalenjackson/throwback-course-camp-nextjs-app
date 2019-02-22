import React from 'react';
import { Button } from 'antd';

export default class EarnMoneyTeachingComponent extends React.Component {
  render() {
    return (
      <div id='earn-money-teaching'>
        <div className='value-props'>
          <video src='/static/videos/earnMoneyTeaching.mp4' loop autoPlay />
          <div className='value-props-overlay'>
            <div className="overlay-copy">
              <h1>Spread Your Voice</h1>
              <p>No matter who you are, everyone has a something beneficial to teach. Why not do it for money?</p>
              <Button size='large' type='primary'>Get Started</Button>
            </div>
          </div>
        </div>
        <h1>Earn money teaching</h1>
      </div>
    )
  }
}
