import React from 'react';
import ReviewSections from '../../globalComponents/reviewSections/index'
import { Modal } from 'antd';
import {BarLoader} from "react-spinners";
import { loaderStyles } from "../../../../globalHelpers/loaderStyles";
import { Link, Router } from '../../../../routes';

export default class Track extends React.Component {
  state = {
    loaded: false,
    firstTimeModalVisible: false
  };
  
  async componentDidMount() {
    const isFromServer = this.props.isRequestFromServer;
    setTimeout(async () => {
      await this.setState({ loaded: true });
      if (window.location.href.split('?').length > 1) {
        this.showFirstTimeModal();
      }
    }, isFromServer ? 600 : 0);
  }
  
  navigateToFirstTimeFirstVideo = async () => {
    await this.setState({ firstTimeModalVisible: false });
    Router.pushRoute(`/courses/view/${ this.props.course._id }/0/0`);
  };
  
  render() {
    return (
      <div>
        { this.state.loaded
          ? <div>
              <div className='first-time-modal-track'>
                <Modal
                  title={ `Welcome to ${ this.props.course.title }` }
                  centered
                  visible={ this.state.firstTimeModalVisible }
                  onOk={ () => this.setState({ firstTimeModalVisible: false }) }
                  onCancel={ () => this.setState({ firstTimeModalVisible: false }) }>
                  <img src='/static/backgroundImages/educationalBackground.svg' />
                  <h2 style={{ marginTop: 20 }}>Learning Track</h2>
                  <p>{ "This is the learning track. Here you can get an overview of the entire your course. Let's get started by watching the first video! Click the first Video " }
                    <a onClick={ () => this.navigateToFirstTimeFirstVideo() }>{ this.props.course.sections[0].videos[0].title }</a>
                  </p>
                </Modal>
              </div>
              <ReviewSections { ...this.props } courseNotInState={ true } />
            </div>
          : <div style={ loaderStyles }>
              <BarLoader color={'#43A5FF'} />
            </div>
        }
      </div>
    )
  }
  
  showFirstTimeModal = () => {
    setTimeout(() => {
      this.setState({ firstTimeModalVisible: true });
    }, 1000)
  }
}