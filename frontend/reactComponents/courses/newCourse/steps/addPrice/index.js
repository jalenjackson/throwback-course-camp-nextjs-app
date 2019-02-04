import React from 'react';
import { Button, Col, Icon, Input, Popover, Row, Tooltip } from 'antd';
import { formatNumber, handleEnterNavigation } from '../../helpers';
import { infoPopoverContent } from './popoverContent';
import Localization from '../../localization';
const AddPriceLocalized = Localization.Steps.AddPrice;

export default class AddPrice extends React.Component {
  render() {
    const title = this.props.container.state.price ? (
      <span className='numeric-input-title'>
        { this.props.container.state.price !== '-' ? formatNumber(this.props.container.state.price) : '-' }
      </span>
    ) : AddPriceLocalized.numberFieldTooltipDefaultValue;
    return (
      <div>
        <img className='new-course-form-icon' alt={ AddPriceLocalized.IconAlt } src='/static/icons/moneyCoin.svg' />
        <Row className='new-course-form-main-row' gutter={ 16 }>
          <Col span={ 24 }>
            <label className='new-course-form-main-label'>{ AddPriceLocalized.Label }
              <Popover content={ infoPopoverContent } title={ AddPriceLocalized.PopoverTitle }>
                <Icon className='new-course-form-main-popover-icon'
                  type='info-circle'>
                </Icon>
              </Popover>
            </label>
            <Tooltip
                trigger={['focus']}
                title={title}
                placement='topLeft'
                overlayClassName="numeric-input">
              <Input
                onKeyDown={ e => handleEnterNavigation(this.props, this.props.container.state.price, e) }
                size="large"
                onChange={ this.props.container.onNumberFieldChange }
                onBlur={ this.props.container.onNumberFieldBlur }
                placeholder={ AddPriceLocalized.InputPlaceholder }
                value={ this.props.container.state.price }
                maxLength={ 25 }/>
            </Tooltip>
          </Col>
        </Row>
        <div className='new-course-button-container'>
          <Button
              className='new-course-next-and-back-button'
              type="primary"
              disabled={ String(this.props.container.state.price).trim() === '' }
              onClick={ () => this.props.container.nextStep() }>
            <Icon type='arrow-right' />
            { Localization.Next }
          </Button>
          <Button
              className='new-course-next-and-back-button'
              type="primary"
              onClick={ () => this.props.container.prevStep() }>
            <Icon type='arrow-left' />
            { Localization.Back }
          </Button>
        </div>
      </div>
    )
  }
}
