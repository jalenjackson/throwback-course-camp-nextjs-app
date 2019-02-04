import React from 'react';
import { Button, Col, Icon, Input, Row, Popover, Tag } from 'antd';
import { infoPopoverContent } from './popoverContent';
import Localization from '../../localization';
const AddLearningLocalized = Localization.Steps.AddLearning;

const AddLearning = props => (
    <div>
      <img alt={ AddLearningLocalized.IconAlt } className='new-course-form-icon' src='/static/icons/chemistryGlass.svg' />
      <Row className='new-course-form-main-row' gutter={ 16 }>
        <Col span={ 24 }>
          <label className='new-course-form-main-label'>{ AddLearningLocalized.Label }
            <Popover content={ infoPopoverContent } title={ AddLearningLocalized.PopoverTitle }>
              <Icon className='new-course-form-main-popover-icon'
                type='info-circle'>
              </Icon>
            </Popover>
          </label>
          <Input
            onKeyDown={ e => props.container.addNewLearning(e) }
            onChange={ e => props.container.updateState('learningTerm', e.target.value) }
            size='large'
            value={ props.container.state.learningTerm }
            suffix={(
              <Button
                  onClick={ () => props.container.addNewLearning('Enter') }
                  style={{ transform: 'translateX(20px)', borderBottomLeftRadius: '0px', borderTopLeftRadius: '0px' }}
                  size="large"
                  type="primary">
                { AddLearningLocalized.Add }
              </Button>
            )} />
        </Col>
      </Row>
      <div style={{ marginTop: 20 }}>
        { props.container.state.learning.map((learning, i) => (
          <Tag style={{ marginTop: 10 }} key={ i } afterClose={ () => props.container.removeNewLearning(learning) } closable >{ learning }</Tag>
        )) }
      </div>
      <div className='new-course-button-container'>
        <Button
            className='new-course-next-and-back-button'
            type='primary'
            disabled={ props.container.state.learning.length === 0 }
            onClick={ () => props.container.nextStep() }>
          <Icon type='arrow-right' />
          { Localization.Next }
        </Button>
        <Button
            className='new-course-next-and-back-button'
            type="primary"
            onClick={ () => props.container.prevStep() }>
          <Icon type='arrow-left' />
          { Localization.Back }
        </Button>
      </div>
    </div>
);

export default AddLearning;
