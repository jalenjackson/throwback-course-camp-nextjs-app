import React from 'react';
import Circle from '../globalComponents/svgs/circle';
import Square from '../globalComponents/svgs/square';
import { AutoComplete, Button, Icon, Input } from 'antd';
import Localization from './localization';

const ValueProps = props => (
  <div id="home-page-value-props">
    <div id="random-designs">
      <Circle />
      <Square />
      <Circle />
    </div>
    <div id="home-page-value-props-text-container">
      <h1>{ Localization.ValueProps.Header }</h1>
      <p>{ Localization.ValueProps.Paragraph }</p>
      <AutoComplete
        dataSource={ props.navbarContainer.state.autoCompleteDataSource }
        onSearch={ props.navbarContainer.getAutoCompleteDataResults }
        className="value-props-search"
        size="large"
        style={ styles.increaseWidth }
        placeholder={ Localization.ValueProps.SearchPlaceholder }
        optionLabelProp="text">
        <Input
            suffix={(
            <Button style={ styles.styleButton } className="search-btn" size="large" type="primary">
              <Icon type="search" />
            </Button>
          )} />
      </AutoComplete>
    </div>
    <div id="home-page-value-props-svg-container">
      <img src='/static/backgroundImages/home-landing-svg.svg' />
    </div>
  </div>
);

const styles = {
  styleButton: { transform: 'translateX(15px)', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  increaseWidth: { width: '65.5%' }
};

export default ValueProps;
