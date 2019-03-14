import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { GraphQlMutate, GraphQlDevURI } from '../../../../globalHelpers/axiosCalls';
import { Button, message } from 'antd';
import GlobalLocalization from '../../../../globalLocalization';
import { Router } from '../../../../routes';
import Cookies from "universal-cookie";

export default class BuyCourse extends React.Component {
  render() {
    const onSuccess = async () => {
      await GraphQlMutate(GraphQlDevURI, `
        mutation {
          handleBoughtCourse(courseId: "${ this.props.course._id }", amountPaid: ${ this.props.course.price }) {
            name
            paidCourses {
              title
            }
          }
        }
      `, this.props.auth.token);
      const userCookie = new Cookies();
      const newAuthCookie = this.props.auth;
      if (!newAuthCookie.paidCourses) newAuthCookie.paidCourses = [];
      newAuthCookie.paidCourses.push({ _id: this.props.course._id });
      userCookie.set('auth', newAuthCookie, { path: '/' });
      Router.pushRoute(`/courses/view/${ this.props.course._id }/track?enrolled=true`);
    };
    
    const onCancel = () => {
      message.info('Let us know if there were any issues you encountered. help@teamcoursecamp.com')
    };
    
    const onError = () => {
      message.error(GlobalLocalization.UnexpectedError);
    };
    
    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.course.price;
    
    const client = {
      sandbox:    'AUrNeHL0ufYL56Ymq1Bcuun1KzKRA1HfE6HOZ-3ID-bVxMoofQ4-y0Yg9G-lY8shrtCVCuSM9smWIGxs',
      production: 'AS2X1LMDsUU49tZ2Y_jmE4OmaWLmLGI9JJyoBqLto_YrHKiXSKdwF2T7r7fDtEXp4EvCOtkCAwgbzOlj',
    };
    
    return (
      <div>
        <div style={ this.props.auth.authenticated ? authenticatedStyles : nonAuthenticatedStyles }>
          <PaypalExpressBtn
            shipping={ 1 }
            env={env}
            client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel} />
        </div>
        { !this.props.auth.authenticated
          ? <Button style={{ background: '#F5D585', color: 'rgb(50, 50, 50)', borderColor: '#F5D585' }} onClick={ () => this.props.authContainer.setContainerState('registerFormVisibility', true) } type="primary">
              Purchase Course With PayPal
            </Button>
          : null
        }
      </div>
    );
  }
}

const nonAuthenticatedStyles = {
  opacity: 0,
  position: 'absolute',
  top: '-1000px',
  left: '-1000px',
  pointerEvents: 'none'
};

const authenticatedStyles = {
  opacity: 1,
  position: 'relative',
  top: 0,
  left: 0,
  pointerEvents: 'auto'
};