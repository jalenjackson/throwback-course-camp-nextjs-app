import React from 'react';
import { Button, Col, Icon, Input, Row, Popover  } from 'antd';
import { infoPopoverContent } from './popoverContent';
import { handleEnterNavigation } from '../../helpers';
import Localization from '../../localization';
import {updateCourse} from "../../updateCourse";
const AddSummaryLocalized = Localization.Steps.AddSummary;

const AddShortSummary = props => (
    <div>
      <img className='new-course-form-icon' alt={ AddSummaryLocalized.IconAlt } src='/static/icons/books.svg' />
      <Row className='new-course-form-main-row' gutter={ 16 }>
        <Col span={ 24 }>
          <label className='new-course-form-main-label'>{ AddSummaryLocalized.Label }
            <Popover content={ infoPopoverContent } title={ AddSummaryLocalized.PopoverTitle }>
              <Icon className='new-course-form-main-popover-icon'
                type="info-circle">
              </Icon>
            </Popover>
          </label>
          <Input
              allowClear
              onKeyDown={ e => handleEnterNavigation(props, props.container.state.title, e)  }
              value={ props.container.state.summary }
              onChange={ e => props.isFromBuildCourse ? updateCourse(props, 'summary', e.target.value) : props.container.updateState('summary', e.target.value) }
              prefix={<Icon className='new-course-form-input-icon' type='edit' />}
              size='large'
              placeholder={ AddSummaryLocalized.InputPlaceholder }
              type='text' />
        </Col>
      </Row>
      <div className="new-course-button-container">
        <Button
            className='new-course-next-and-back-button'
            type='primary'
            disabled={ props.container.state.summary.trim() === '' }
            onClick={ () => props.container.nextStep() }>
          <Icon type='arrow-right' />
          { Localization.Next }
        </Button>
        <Button
            className='new-course-next-and-back-button'
            type='primary'
            onClick={() => props.container.prevStep()}>
          <Icon type='arrow-left' />
          { Localization.Back }
        </Button>
      </div>
    </div>
);

export default AddShortSummary;
