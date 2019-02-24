import React from 'react';
import Footer from '../globalComponents/footer';
import ValueProps from './valueProps';
import CourseCarousel from './courseCarousel';
import PopularCategories from './popularCategories/index';
import EarnMoneyCTA from './earnMoneycta';
import { handleScrollSkewAnimation } from './helpers';
import { Subscribe } from 'unstated';
import NavbarContainer from '../globalComponents/navbar/navbarContainer';
import IndexContainer from './container';

export default class IndexComponent extends React.Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    handleScrollSkewAnimation();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);
    
    if (this.props.isRequestFromServer) {
      console.log('render loading animation')
    }
  }

  render() {
    return (
      <Subscribe to={[IndexContainer, NavbarContainer]}>
        { (indexContainer, navbarContainer) => (
          <div id="home-page">
            <ValueProps navbarContainer={ navbarContainer } />
            <CourseCarousel container={ indexContainer } { ...this.props } />
            <PopularCategories container={ indexContainer } />
            <EarnMoneyCTA container={ indexContainer } />
            <Footer marginTop={ 150 } />
          </div>
        )}
      </Subscribe>
    )
  }
}
