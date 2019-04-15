import React, { Component } from 'react';
import { Layout, Menu, Icon, } from 'antd';
import { connect } from 'react-redux';
import { getMenu } from './store/actionCreators'

const {
    Header, Content, Footer, Sider,
} = Layout;
const {
    SubMenu
} = Menu;
class Home extends Component{
    render() {
        const { list } = this.props;
        return (
            <Layout>
                <Sider style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                }}
                >
                    <div style={{height: '64px', color: '#fff', fontSize: '20px', lineHeight: '64px', textAlign: 'center'}} className="logo">
                        指挥一体化平台
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {
                            list.map((item_parent) => {
                                return (
                                    <SubMenu key={item_parent.get('id')} title={<span><Icon type="user" />{item_parent.get('name')}</span>}>
                                        {
                                            item_parent.get('children').map((item_child) => {
                                                return (
                                                    <Menu.Item key={item_child.get('id')}>{item_child.get('name')}</Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0, position: "fixed", top: 0, width: '100%' }} />
                    <Content style={{ margin: '80px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            ...
                            <br />
                            Really
                            <br />...<br />...<br />...<br />
                            long
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
    componentDidMount() {
        this.props.getResList()
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('homeReducer').get('list')
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getResList () {
            dispatch(getMenu())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);