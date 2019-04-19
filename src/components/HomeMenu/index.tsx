import React from 'react';
import { Menu, Icon } from "antd";
import { ImmuTableProps } from "../../types";

const { SubMenu } = Menu;

type Props = {
    list: any[],
    collapsed: boolean
}

function HomeMenu (props: Props) {
    const {collapsed, list} = props;
    return (
        <Menu
            theme="dark"
            mode="inline"
            inlineCollapsed={collapsed}
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
    )
}
export default HomeMenu;