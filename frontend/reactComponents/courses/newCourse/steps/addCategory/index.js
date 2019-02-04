import React from 'react';
import { Button, Col, Icon, Row, Popover, AutoComplete } from 'antd';
import { infoPopoverContent } from './popoverContent';
import Localization from '../../localization';
const AddCategoryLocalized = Localization.Steps.AddCategory;

const AddCategory = props => (
    <div>
      <img className='new-course-form-icon' alt={ AddCategoryLocalized.IconAlt } src='/static/icons/moon.svg' />
      <Row className='new-course-form-main-row' gutter={ 16 }>
        <Col span={ 24 }>
          <label className='new-course-form-main-label'>{ AddCategoryLocalized.Label }
            <Popover content={ infoPopoverContent } title={ AddCategoryLocalized.PopoverTitle }>
              <Icon className='new-course-form-main-popover-icon'
                type='info-circle'>
              </Icon>
            </Popover>
          </label>
          <AutoComplete
              style={{ width: '100%' }}
              size='large'
              dataSource={ Localization.Steps.AddCategory.Categories }
              onSearch={ term => props.container.updateState('category', term) }
              onSelect={ term => props.container.updateState('category', term) }
              value={ props.container.state.category }
              placeholder={ AddCategoryLocalized.Placeholder }>
          </AutoComplete>
        </Col>
      </Row>
      <div className="new-course-button-container">
        <Button
            className='new-course-next-and-back-button'
            type='primary'
            disabled={ props.container.state.category.trim() === '' }
            onClick={ () => props.container.nextStep() }>
          <Icon type='arrow-right' />
          { Localization.Next }
        </Button>
        <Button
            className='new-course-next-and-back-button'
            type='primary'
            onClick={ () => props.container.prevStep() }>
          <Icon type='arrow-left' />
          { Localization.Back }
        </Button>
      </div>
    </div>
);

export default AddCategory;
