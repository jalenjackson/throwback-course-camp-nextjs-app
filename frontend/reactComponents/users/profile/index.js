import { Layout } from 'antd';
import Preview from './preview/index';
import LeftMenu from './leftMenu';
import { Subscribe } from 'unstated';
import ProfileContainer from './container';

const { Content, Sider } = Layout;

export default class Profile extends React.Component {
  state = {
    collapsed: false,
  };
  
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  
  render() {
    return (
      <Subscribe to={[ProfileContainer]}>
        { container => (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              theme='light'
              collapsible
              collapsed={ this.state.collapsed }
              onCollapse={ this.onCollapse }>
              <LeftMenu container={ container } { ...this.props } />
            </Sider>
            <Layout>
              <Content style={{ margin: '0 33px', marginTop: '50px' }}>
                <Preview container={ container } { ...this.props } />
              </Content>
            </Layout>
          </Layout>
        ) }
      </Subscribe>
    );
  }
}