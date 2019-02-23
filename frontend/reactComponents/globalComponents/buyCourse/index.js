import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { GraphQlMutate, GraphQlDevURI } from '../../../../globalHelpers/axiosCalls';

export default class BuyCourse extends React.Component {
  render() {
    const onSuccess = async () => {
      console.log(this.props.auth)
      const handlePayout = await GraphQlMutate(GraphQlDevURI, `
        mutation {
          handleBoughtCourse(courseId: "${ this.props.course._id }", amountPaid: ${ this.props.course.price }) {
            name
            paidCourses {
              title
            }
          }
        }
      `, this.props.auth.token);
      
      console.log(handlePayout);
    };
    
    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
    };
    
    const onError = (err) => {
      console.log("Error!", err);
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
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel} />
      </div>
    );
  }
}
