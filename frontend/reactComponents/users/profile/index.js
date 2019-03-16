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
    loaded: false,
    collapseWidth: 200,
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
    window.addEventListener("resize", this.updateDimensions);
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        await this.setState({ loaded: true });
        this.setInitialCollapseDimensions();
      }, 600);
    } else {
      await this.setState({ loaded: true });
      this.setInitialCollapseDimensions();
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  updateDimensions = () => {
    this.setInitialCollapseDimensions();
  };
  
  setInitialCollapseDimensions = () => {
    if ($(window).width() < 992) {
      this.setState({ collapseWidth: '90%', widthSet: true });
    } else {
      this.setState({ collapseWidth: 200, widthSet: false });
    }
  };
  
  render() {
    return (
      <Subscribe to={[ProfileContainer]}>
        { container => (
          <div>
            { this.state.loaded
              ? <div>
                <SetAuth { ...this.props } container={ container } />
                  { container.state.auth
                    ? <div>
                      <Layout style={{ minHeight: '100vh' }}>
                        <Sider
                          theme='dark'
                          collapsible
                          breakpoint="lg"
                          collapsedWidth="0"
                          width={ this.state.collapseWidth }
                          collapsed={ container.state.menuCollapsed }
                          onCollapse={ collapsed => container.updateState('menuCollapsed', collapsed) }>
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
