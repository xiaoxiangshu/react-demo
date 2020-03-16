import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon, Layout, Badge, PopOver } from 'antd';
import { connectAlita } from 'redux-alita';
import avater from "../style/imgs/b1.jpg";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HeaderCustom extends Component {
  state = {
    user: '',
    visible: false,
  }
  render() {
    return (
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px', float: 'right' }}
         >
          <Menu.Item style>
            11
          </Menu.Item>
          <Menu.Item>
            11
          </Menu.Item>
          <Menu.Item>
            <Badge count={25} overflowCount={55} >
            <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <SubMenu><img src={avater} alt="头像" />
            <MenuItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好</Menu.Item>
              <Menu.Item key="setting:1"> 个人信息</Menu.Item>
              <Menu.Item key="logout">退出登录</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </Header>
    )
  }
}
export default withRouter(connectAlita(['responsive'])(HeaderCustom));