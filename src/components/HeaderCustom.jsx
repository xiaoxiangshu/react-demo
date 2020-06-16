import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon, Layout, Badge } from 'antd'; // PopOver
import { connectAlita } from 'redux-alita';
import avater from "../style/imgs/b1.jpg";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
  state = {
    user: '',
    visible: false,
    current: "full"
  }
  render() {
    return (
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px', float: 'right', height: "62px" }}
          selectedKeys={[this.state.current]}
         >
          <Menu.Item key="full">
            11
          </Menu.Item>
          <Menu.Item key="notify">
            <Badge count={25} overflowCount={55} style={{marginLeft: 10, width: '5px'}}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <SubMenu 
            title={
              <span className="avatar">
                <img src={avater} alt="头像" />
                小香薯
              </span>}>
            <Menu.ItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好</Menu.Item>
              <Menu.Item key="setting:2"> 个人信息</Menu.Item>
              <Menu.Item key="logout">退出登录</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Header>
    )
  }
}
export default withRouter(connectAlita(['responsive'])(HeaderCustom));