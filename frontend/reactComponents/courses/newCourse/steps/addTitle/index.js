import React from 'react';
import { Button, Col, Icon, Input, Row, Popover  } from 'antd';
import { infoPopoverContent } from './popoverContent';
import { handleEnterNavigation } from '../../helpers';
import { updateCourse } from '../../updateCourse';
import Localization from '../../localization';
const AddTitleLocalized = Localization.Steps.AddTitle;

const AddTitle = props => (
  <div>
    <img style={{ width: 40 }} className='new-course-form-icon' alt={ AddTitleLocalized.IconAlt } src='/static/icons/lightbulb.svg' />
    <Row className='new-course-form-main-row' gutter={ 16 }>
      <Col span={ 24 }>
        <label className='new-course-form-main-label'>{ AddTitleLocalized.Label }
          <Popover content={ infoPopoverContent } title={ AddTitleLocalized.PopoverTitle }>
            <Icon className='new-course-form-main-popover-icon'
              type="info-circle">
            </Icon>
          </Popover>
        </label>
        <Input
            allowClear
            onKeyDown={ e => handleEnterNavigation(props, props.container.state.title, e)  }
            value={ props.container.state.title }
            onChange={ e => props.isFromBuildCourse ? updateCourse(props, 'title', e.target.value) : props.container.updateState('title', e.target.value) }
            prefix={<Icon className='new-course-form-input-icon' type='edit' />}
            size='large'
            placeholder={ AddTitleLocalized.InputPlaceholder }
            type='text' />
      </Col>
    </Row>
    <div className='new-course-button-container'>
      <Button
          className='new-course-next-button'
          type='primary'
          disabled={ props.container.state.title.trim() === '' }
          onClick={ () => props.container.nextStep() }>
        <Icon type='arrow-right' />
        { Localization.Next }
      </Button>
    </div>
  </div>
);


export default AddTitle;
