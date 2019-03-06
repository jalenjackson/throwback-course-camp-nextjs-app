import React from 'react';
import { Button } from 'antd';
import Localization from './localization';
import { Link } from '../../../routes';

const EarnMoneyCTA = () => (
  <div className='earn-money-cta'>
    <img src="/static/backgroundImages/earn-money.svg" />
    <div className='earn-money-cta-text-container'>
      <h1>{ Localization.EarnMoneyCTA.Title }</h1>
      <p>{ Localization.EarnMoneyCTA.Paragraph }</p>
      <Link to='/teach'>
        <Button type="primary" icon="dollar">{ Localization.GetStarted }</Button>
      </Link>
    </div>
  </div>
);

export default EarnMoneyCTA;
