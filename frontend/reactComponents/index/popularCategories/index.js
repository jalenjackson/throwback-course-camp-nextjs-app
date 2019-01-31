import React from 'react';
import { Button, Col, Popover, Row } from 'antd';
import _ from 'lodash';
import Localization from '../localization';
import { CategoryIcons, CategoryDefinitions, styles } from './helpers';

const Index = () => (
  <div id='popular-categories'>
    <img src="/static/backgroundImages/course-categories.svg" className="popular-categories-background" />
    <div className='popular-categories-text-container'>
      <h1>
        <img src='/static/icons/chemistryGlass.svg' />
        <span>
          { Localization.PopularCategories.Header }
        </span>
      </h1>
    </div>
    <div className="popular-category-list">
      <Row className="popular-category-row" gutter={ 16 }>
        { _.times(8, (i) => (
          <Popover content={ renderPopoverContent(i) } title={ CategoryDefinitions[i].title }>
            <Col key={ i } className="gutter-row" span={ 6 }>
            <div className="gutter-box">
              <img src={ CategoryIcons[i] } />
              <div className="category-title">
                <h1>{ CategoryDefinitions[i].title }</h1>
              </div>
              <div className='category-explore-btn-container'>
                <Button className='explore-button' type="primary" icon="eye">{ Localization.Explore }</Button>
              </div>
            </div>
          </Col>
        </Popover>
        )) }
      </Row>
      <a>{ Localization.SeeAll }</a>
    </div>
  </div>
);

const renderPopoverContent = i => (
  <div>
    <img alt="Money Icon" style={ styles.popOverIcon } src="/static/icons/moneyCoin.svg" />
    <p style={ styles.popOverSalary }><div dangerouslySetInnerHTML={{ __html: CategoryDefinitions[i].salary }} /></p>
  </div>
);

export default Index;
