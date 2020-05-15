import React,{useState} from 'react';
import { Layout,Breadcrumb, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

import styles from './index.less'


const { Header, Sider, Content } = Layout;

class Home extends React.Component {
    state = {
        collapsed: false,
      };

    toggle = ()=>{ 
        this.setState({
            collapsed: !this.state.collapsed
        })
    } 
    render(){
        return (
            <Layout className={styles.root}>
                <Sider 
                    className={styles.sider}
                    style={{height:document.documentElement.getBoundingClientRect().height}}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo} >{this.state.collapsed ? 'antd' : 'antd后台管理'}</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            menu1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            menu2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            menu3
                        </Menu.Item>
                        <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="u3">Tom</Menu.Item>
                            <Menu.Item key="u4">Bill</Menu.Item>
                            <Menu.Item key="u5">Alex</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sub2" icon={<UserOutlined />} title="Devloper">
                            <Menu.SubMenu key="subbb" icon={<UserOutlined />} title="FEDevloper">
                                <Menu.Item key="d3">Vue</Menu.Item>
                                <Menu.Item key="d4">React</Menu.Item>
                                <Menu.Item key="d5">Angular</Menu.Item>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                 <Layout className="site-layout">
                    <Header className={styles.layoutBackground} style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: styles.trigger,
                        onClick: this.toggle,
                        })}
                    </Header>
                    <Breadcrumb style={{ margin: '12px 0 0 24px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className={styles.layoutBackground}
                        style={{
                            margin: '12px 12px',
                            padding: 12,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home;