import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { actionCreators }  from './store'
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo/index'
const {
    Header, Content, Footer, Sider,
} = Layout;
const {
    SubMenu
} = Menu;
class Home extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        console.log(this.state);
    };
    render() {
        const { list } = this.props;
        return (
            <Layout>
                <Sider
                    collapsible
                    onCollapse={this.toggleCollapsed}
                    collapsed={this.state.collapsed}
                    style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                }}
                >
                    <Logo name='指挥一体化平台' icon={<Icon type="deployment-unit" />} collapsed={this.state.collapsed}/>
                    <Menu theme="dark"
                          mode="inline"
                          inlineCollapsed={this.state.collapsed}
                    >
                        {
                            list.map((item_parent) => {
                                return (
                                    <SubMenu key={item_parent.get('id')} title={<span><Icon type="user" /><span>{item_parent.get('name')}</span></span>}>
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
                    <Header style={{ background: '#fff', padding: 0, position: "fixed", top: 0, width: '100%' }}>
                    </Header>
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
            dispatch(actionCreators.ac_getMenuList())
        }
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));