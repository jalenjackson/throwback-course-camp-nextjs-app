import React from 'react';
import Footer from '../globalComponents/footer';
import ValueProps from './valueProps';
import CourseCarousel from './courseCarousel';
import PopularCategories from './popularCategories/index';
import EarnMoneyCTA from './earnMoneycta';
import { handleScrollSkewAnimation } from './helpers';
import { Subscribe } from 'unstated';
import NavbarContainer from '../globalComponents/navbar/navbarContainer';

export default class IndexComponent extends React.Component {
  componentDidMount() {
    handleScrollSkewAnimation();
  }

  render() {
    return (
      <Subscribe to={[NavbarContainer]}>
        { navbarContainer => (
          <div id="home-page">
            <ValueProps navbarContainer={ navbarContainer } />
            <CourseCarousel { ...this.props } />
            <PopularCategories />
            <EarnMoneyCTA />
            <Footer />
          </div>
        )}
      </Subscribe>
    )
  }
}

