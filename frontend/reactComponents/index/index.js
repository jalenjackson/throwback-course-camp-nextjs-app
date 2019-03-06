import React from 'react';
import Footer from '../globalComponents/footer';
import ValueProps from './valueProps';
import CourseCarousel from './courseCarousel';
import PopularCategories from './popularCategories/index';
import EarnMoneyCTA from './earnMoneycta';
import { handleScrollSkewAnimation, animateElementsOnLoad } from './helpers';
import { Subscribe } from 'unstated';
import NavbarContainer from '../globalComponents/navbar/navbarContainer';
import IndexContainer from './container';
import Loader from '../globalComponents/loader';

export default class IndexComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({ loaded: true });
        handleScrollSkewAnimation();
        animateElementsOnLoad();
      }, 500);
    } else {
      await this.setState({ loaded: true });
      handleScrollSkewAnimation();
      animateElementsOnLoad();
    }
  }

  render() {
    return (
      <Subscribe to={[IndexContainer, NavbarContainer]}>
        { (indexContainer, navbarContainer) => (
          <div id="home-page">
            { this.state.loaded
              ? <div>
                  <ValueProps { ...this.props } navbarContainer={ navbarContainer } />
                  <CourseCarousel container={ indexContainer } { ...this.props } />
                  <PopularCategories container={ indexContainer } />
                  <EarnMoneyCTA container={ indexContainer } />
                  <Footer marginTop={ 150 } />
                </div>
              : <Loader />
            }
          </div>
        )}
      </Subscribe>
    )
  }
}