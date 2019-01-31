import React from 'react';
import { Col, Divider, Row } from 'antd';

const Footer = () => (
  <div className='company-footer'>
    <img src='/static/icons/paperWithBulletPoints.svg' />
    <h1 className='footer-company-name'>Company Name</h1>
    <div className="company-footer-items">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <h1>Learn</h1>
          <a>Courses</a>
          <a>Community</a>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1>Practice</h1>
          <a>Quizzes</a>
          <a>Picture Quizzes</a>
          <a>Matching Games</a>
          <a>Crunch Challenges</a>
          <a>Coding Challenges</a>
          <a>Coding Projects</a>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1>Join</h1>
          <a>Register</a>
          <a>Login</a>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1>Information</h1>
          <a>Terms And Conditions</a>
          <a>Privacy Policy</a>
        </Col>
      </Row>
    </div>
    <div className="bottom-footer">
      <Divider className="bottom-footer-divider">© Company Name, LLC</Divider>
    </div>
  </div>
);

export default Footer;
