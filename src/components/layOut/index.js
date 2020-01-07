import React from 'react';
import { Slot } from 'react-page-layout';
import { Layout, Breadcrumb, Icon } from 'antd';
import ContentHeader from '../../components/header/index';
import ContentFooter from '../../components/footer/index';
import ContentSiderBar from '../../components/sider/index';

const { Header, Content, Footer, Sider } = Layout;

class PublicLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            currentLocation : props.children._self.props.location
        }
        // 外面目录层级改变之后可能获取不到
        // console.log('props.chilren._self', props.children._self.props.location);
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"><img src={require('../../static/image/logo192.png')} /></div>
                    <ContentSiderBar current={this.state.currentLocation} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: '0 16px', boxSizing:'border-box' }} >
                        <ContentHeader />
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 10, background: '#fff', height: 'calc(100% - 60px)' }}>
                            <Slot name="main" />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <ContentFooter />
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default PublicLayout;