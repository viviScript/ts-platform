import React from "react";
import { Layout, Menu, Icon, Badge } from "antd";
import { HeaderWrapper, HeaderAvater } from "./style/style";
import avater from "../../static/images/head.jpg";
const { Header } = Layout;
const { SubMenu, ItemGroup } = Menu;
type props = {
    screenFull():void;
    collapsed: boolean;
}
function HomeHeader(props: props) {
  
    return (
      <HeaderWrapper collapsed={props.collapsed}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="full" onClick={props.screenFull}>
              <Icon type="arrows-alt" onClick={props.screenFull} />
            </Menu.Item>
            <Menu.Item key="1">
              <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
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
    );
}

export default HomeHeader;
