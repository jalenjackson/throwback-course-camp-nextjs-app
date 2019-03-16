import React from 'react';
import { Col, Divider, Row } from 'antd';
import { Link } from '../../../routes';
import GlobalLocalization from "../../../globalLocalization";
import {Menu} from "antd/lib/menu";
import _ from "lodash";

export default class Footer extends React.Component {
  state = {
    loaded: false
  };
  
  componentDidMount() {
    this.setState({ loaded: true });
  }
  
  render() {
    return (
      <div>
        { this.state.loaded
          ?
            <div style={{ marginTop: this.props.marginTop }} className='company-footer'>
              <img src='/static/icons/logo.svg' />
              <h1 className='footer-company-name'>Course Camp</h1>
              <div className="company-footer-items">
                <Row gutter={16}>
                  <Col className="gutter-row" span={6}>
                    <h1>All Courses</h1>
                    <Link route='/courses/all-courses?page=1'>
                      <a>Courses</a>
                    </Link>
                    <Link route='/community?page=1'>
                      <a>Community</a>
                    </Link>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <h1>Become A Teacher</h1>
                    <Link route='/teach'>
                      <a>Earn Money Teaching</a>
                    </Link>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <h1>Categories</h1>
                    { GlobalLocalization.coruseCategories.map((category) => (
                       typeof window !== 'undefined' ? window.location.pathname.split('/')[2] === 'category'
                        ? <a href={ `/courses/category/${ _.kebabCase(category) }?page=1` }>{ category }</a>
                        : <Link to={ `/courses/category/${ _.kebabCase(category) }?page=1`}>
                          { category }
                        </Link>
                        : null
                    )) }
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <h1>Help Center</h1>
                    <Link route='/help-center'>
                      <a>Help</a>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="bottom-footer">
                <Divider className="bottom-footer-divider">©2019 Course Camp, LLC</Divider>
              </div>
            </div>
          : <div style={ loaderStyle } />
        }
        
      </div>
    )
  }
}

const loaderStyle = { width: '100%', height: '40vh', background: '#FAFAFF', marginTop: '70px' };