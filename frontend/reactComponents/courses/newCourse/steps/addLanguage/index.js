import React from 'react';
import { Button, Col, Icon, Row, Select } from 'antd';
import Localization from '../../localization';
const AddLanguageLocalized = Localization.Steps.AddLanguage;

const AddLanguage = props => (
  <div>
    <Row className='new-course-form-main-row' gutter={ 16 }>
      <Col span={ 24 }>
        <label className='new-course-form-main-label'>{ AddLanguageLocalized.Label }</label>
        <Select
            defaultValue='English'
            className='new-course-form-select-field'
            onChange={ selection => props.container.updateState('language', selection) }
            size='large'
            placeholder={ AddLanguageLocalized.Placeholder }>
          { AddLanguageLocalized.Languages.map((language) => (
            <Option value={ language }>{ language }</Option>
          ))}
        </Select>
      </Col>
    </Row>
    <div className="new-course-button-container">
      <Button
          className='new-course-next-and-back-button'
          type='primary'
          disabled={ props.container.state.language.trim() === '' }
          onClick={ () => props.container.nextStep(props) }>
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

export default AddLanguage;
