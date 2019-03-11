import { Layout } from 'antd';
import Preview from './preview/index';
import LeftMenu from './leftMenu';
import { Subscribe } from 'unstated';
import ProfileContainer from './container';
import SetAuth from "./setAuth";
import {BarLoader} from "react-spinners";
import React from "react";

const { Content, Sider } = Layout;

export default class Profile extends React.Component {
  state = {
    collapsed: false,
    loaded: false
  };
  
  async componentDidMount() {
  
  }
  
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  
  async componentDidMount() {
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        this.setState({ loaded: true });
      }, 600);
    } else {
      this.setState({ loaded: true });
    }
  }
  
  render() {
    return (
      <Subscribe to={[ProfileContainer]}>
        { container => (
          <div>
            { console.log(this.props.auth) }
            { this.state.loaded
              ? <div>
                <SetAuth { ...this.props } container={ container } />
                  { container.state.auth
                    ? <div>
                      <Layout style={{ minHeight: '100vh' }}>
                        <Sider
                          theme='light'
                          collapsible
                          collapsed={ this.state.collapsed }
                          onCollapse={ this.onCollapse }>
                          <LeftMenu container={ container } { ...this.props } auth={ this.state.auth } />
                        </Sider>
                        <Layout>
                          <Content style={{ margin: '0 33px', marginTop: '50px' }}>
                            <Preview container={ container } { ...this.props } auth={ this.state.auth } />
                          </Content>
                        </Layout>
                      </Layout>
                    </div>
                    : <div style={ loaderStyles }>
                        <BarLoader color={'#43A5FF'} />
                      </div>
                  }
                </div>
              : <div style={ loaderStyles }>
                  <BarLoader color={'#43A5FF'} />
                </div>
            }
          </div>
        ) }
      </Subscribe>
    );
  }
}

const loaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderBottom: '1px solid #e8e8e8',
  boxShadow: 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)',
  height: '46px',
};
