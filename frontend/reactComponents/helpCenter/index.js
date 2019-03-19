import React from 'react';
import PageLoader from "../globalComponents/pageLoader";
import { Layout } from 'antd';
import LeftMenu from "./leftMenu";
import ContentCopy from "./content";
import { Subscribe } from "unstated";
import HelpCenterContainer from './container';

const { Content, Sider } = Layout;

export default class HelpCenter extends React.Component {
  state = {
    loaded: false,
    collapsed: false,
    collapseWidth: 250
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
  
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  
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
      this.setState({ collapseWidth: 250, widthSet: false });
    }
  };
  
  render() {
    return (
      <Subscribe to={[HelpCenterContainer]}>
        { container => (
          <div>
            { this.state.loaded
              ? <Layout style={{ minHeight: '100vh' }}>
                <Sider
                  theme='dark'
                  collapsible
                  breakpoint="lg"
                  width={ this.state.collapseWidth }
                  collapsed={ container.state.menuCollapsed }
                  onCollapse={ collapsed => container.updateState('menuCollapsed', collapsed) }>
                  <div className="logo" />
                  <LeftMenu container={ container } />
                </Sider>
                <Layout>
                  <Content style={{ margin: '0 16px' }}>
                    <ContentCopy { ...this.props } container={ container } />
                  </Content>
                </Layout>
              </Layout>
              : <PageLoader />
            }
          </div>
        ) }
      </Subscribe>
    )
  }
}


