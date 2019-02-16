import React from 'react';
import { Button, Col, Icon, Row, Popover, Select } from 'antd';
import { infoPopoverContent } from './popoverContent';
import Localization from '../../localization';
import {updateCourse} from "../../updateCourse";
const AddCategoryLocalized = Localization.Steps.AddCategory;

const Option = Select.Option;

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
          <Select defaultValue={ props.container.state.category } style={{ width: 400 }} placeholder="Select A Category" onChange={ v => props.isFromBuildCourse ? updateCourse(props, 'category', v) : props.container.updateState('category', v) }>
            { Localization.Steps.AddCategory.Categories.map((category) => (
               <Option value={ category }>{ category }</Option>
            )) }
          </Select>
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
