import React from 'react';
import Footer from '../globalComponents/footer';
import NavbarContainer from '../globalComponents/navbar/navbarContainer';
import { BarLoader } from 'react-spinners';
import { Router } from '../../../routes';
import { Subscribe } from 'unstated';
import { loaderStyles, animateElements } from './helpers';
import TopValueProps from './columns/topValueProps';
import CoursePreviewContainer from './columns/coursePreviewContainer';
import CourseBuilderValueProps from './columns/courseBuilderValueProps';
import GetStartedTeachingCTA from './columns/getStartedTeachingCTA';

export default class EarnMoneyTeachingComponent extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({loaded: true});
      }, 600);
    } else {
      await this.setState({loaded: true});
    }
  }
  
  render() {
    return (
      <Subscribe to={[NavbarContainer]}>
        { navbarContainer => (
          <div id='earn-money-teaching'>
            { this.state.loaded
              ? <div>
                  <TopValueProps navbarContainer={ navbarContainer } { ...this.props } />
                  <CoursePreviewContainer />
                  <CourseBuilderValueProps />
                  <GetStartedTeachingCTA navbarContainer={ navbarContainer } { ...this.props } />
                  <Footer />
                </div>
              : <div style={ loaderStyles }>
                  <BarLoader color={'#43A5FF'} />
                </div>
            }
          </div>
        ) }
      </Subscribe>
    )
  }
}