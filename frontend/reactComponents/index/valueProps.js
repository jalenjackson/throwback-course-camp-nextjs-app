import React from 'react';
import Circle from '../globalComponents/svgs/circle';
import Square from '../globalComponents/svgs/square';
import { AutoComplete, Button, Icon, Input } from 'antd';
import Localization from './localization';
import { Router } from "../../../routes";
import _ from 'lodash';

export default class ValueProps extends React.Component {
  state = {
    isNavigating: false
  };
  
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
            value={ this.props.navbarContainer.state.autocompleteTerm }
            onChange={ term => this.props.navbarContainer.setContainerState('autocompleteTerm', term) }
            optionLabelProp="text">
            <Input
              onKeyDown={ e => this.navigateToSearch(e, false) }
              suffix={(
                <Button onClick={ e => this.navigateToSearch(e, true) } style={ styles.styleButton } className="search-btn" size="large" type="primary">
                  <Icon type={ !this.props.navbarContainer.state.isNavigating ? 'search' : 'loading' } />
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
  
  navigateToSearch = async (e, isClicked) => {
    if (isClicked || e.key === 'Enter') {
      await this.props.navbarContainer.setContainerState('isNavigating', true);
      await Router.pushRoute(`/courses/search/${ _.kebabCase(this.props.navbarContainer.state.autocompleteTerm) }?page=1`)
    }
  };
}

const styles = {
  styleButton: { transform: 'translateX(15px)', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  increaseWidth: { width: '65.5%' }
};