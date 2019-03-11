import React from 'react';
import { Input, Tooltip } from 'antd';

export default class NumericInput extends React.Component {
  onChange = async e => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      await this.props.container.updateState('transferFundsAmount', value);
      if (this.props.container.state.transferFundsAmount > this.props.container.state.auth.moneyMade) {
        this.props.container.updateState('transferFundsErrorMessage', 'You cannot enter a number that is greater than the amount of money you have')
      } else {
        this.props.container.updateState('transferFundsErrorMessage', '')
      }
    }
  };
  
  onBlur = () => {
    const value = this.props.container.state.transferFundsAmount;
    const { onBlur } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange(value.slice(0, -1));
    }
    if (onBlur) {
      onBlur();
    }
  };
  
  render() {
    const value = this.props.container.state.transferFundsAmount;
    const title = value ? (
      <span className="numeric-input-title">
        {value !== '-' ? formatNumber(value) : '-'}
      </span>
    ) : 'Input a number';
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input">
        <Input
          value={ this.props.container.state.transferFundsAmount }
          onChange={ this.onChange }
          onBlur={ this.onBlur }
          placeholder="Input a number"
          maxLength={25}
        />
      </Tooltip>
    );
  }
}

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}