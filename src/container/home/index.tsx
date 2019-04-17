import React, { PureComponent } from "react";
import { Layout, Menu, Icon, Badge } from "antd";
import { connect } from "react-redux";
import screenfull from "screenfull";
import { actionCreators } from "./store";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Logo from "../../components/Logo/index";
import { ImmuTableProps } from "../../types";
import { HeaderWrapper, HeaderAvater } from "./style/style";
import avater from "../../static/images/b1.jpg";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, ItemGroup } = Menu;
interface HomeProps {
  list: any[];
  getResList(): void;
}
interface HomeStateProps {
  collapsed: boolean;
  marginLeft: number;
}
class Home extends PureComponent<
  HomeProps & RouteComponentProps,
  HomeStateProps
> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
      marginLeft: 200
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  };
  toggleCollapsed = () => {
    this.setState((preState: HomeStateProps) => {
      return {
        collapsed: !preState.collapsed
      };
    });
    if (this.state.collapsed) {
      this.setState({
        marginLeft: 200
      });
    } else {
      this.setState({
        marginLeft: 80
      });
    }
  };
  public render() {
    const { list } = this.props;
    return (
      <Layout>
        <Sider
          collapsible
          onCollapse={this.toggleCollapsed}
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <Logo
            name="指挥一体化平台"
            icon={<Icon type="deployment-unit" />}
            collapsed={this.state.collapsed}
          />
          <Menu
            theme="dark"
            mode="inline"
            inlineCollapsed={this.state.collapsed}
          >
            {list.map((item_parent: ImmuTableProps) => {
              return (
                <SubMenu
                  key={item_parent.get("id")}
                  title={
                    <span>
                      <Icon type="user" />
                      <span>{item_parent.get("name")}</span>
                    </span>
                  }
                >
                  {item_parent
                    .get("children")
                    .map((item_child: ImmuTableProps) => {
                      return (
                        <Menu.Item key={item_child.get("id")}>
                          {item_child.get("name")}
                        </Menu.Item>
                      );
                    })}
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>
        <Layout
          style={{ marginLeft: this.state.marginLeft, position: "relative" }}
        >
          <HeaderWrapper>
            <Header>
              <Menu theme="dark" mode="horizontal">
                <Menu.Item key="full" onClick={this.screenFull}>
                  <Icon type="arrows-alt" onClick={this.screenFull}/>
                </Menu.Item>
                <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                <SubMenu
                  title={
                    <HeaderAvater>
                      <img src={avater} alt="头像" />
                    </HeaderAvater>
                  }
                >
                  <ItemGroup title="用户中心">
                    <Menu.Item key="setting:1">你好 - 管理员</Menu.Item>
                    <Menu.Item key="setting:2">个人信息</Menu.Item>
                    <Menu.Item key="logout">
                      <span>退出登录</span>
                    </Menu.Item>
                  </ItemGroup>
                  <ItemGroup title="设置中心">
                    <Menu.Item key="setting:3">个人设置</Menu.Item>
                    <Menu.Item key="setting:4">系统设置</Menu.Item>
                  </ItemGroup>
                </SubMenu>
              </Menu>
            </Header>
          </HeaderWrapper>

          <Content style={{ margin: "80px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              ...
              <br />
              Really
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              long
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
  componentWillMount() {
    this.props.getResList();
  }
  componentDidMount() {}
}

const mapStateToProps = (state: ImmuTableProps): object => {
  return {
    list: state.get("homeReducer").get("list")
  };
};
const mapDispatchToProps = (dispatch: any): object => {
  return {
    getResList() {
      dispatch(actionCreators.ac_getMenuList());
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
