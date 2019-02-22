import React from 'react';
import Circle from '../globalComponents/svgs/circle';
import Square from '../globalComponents/svgs/square';
import { AutoComplete, Button, Icon, Input } from 'antd';
import Localization from './localization';
import TweenMax, { Power3 } from 'gsap/TweenMax';

export default class ValueProps extends React.Component {
  componentDidMount() {
    TweenMax.to('#home-page-value-props-text-container h1', 0.3,
      { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.2});
    
    TweenMax.to('#home-page-value-props-text-container p', 0.3,
      { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.25});
    
    TweenMax.to('#home-page-value-props-text-container .ant-select-lg', 0.3,
      { opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power3.easeOut, delay: 0.35});
  }
  
  render() {
    return (
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
            dataSource={ this.props.navbarContainer.state.autoCompleteDataSource }
            onSearch={ this.props.navbarContainer.getAutoCompleteDataResults }
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
    )
  }
}

const styles = {
  styleButton: { transform: 'translateX(15px)', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  increaseWidth: { width: '65.5%' }
};