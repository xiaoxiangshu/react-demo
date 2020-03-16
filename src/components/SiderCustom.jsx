import React, { Component } from 'react'
import { Layout } from 'antd'
import routes from '../routes/config';
import { withRouter } from 'react-router-dom'
import SiderMenu from './SiderMenu';

const { Sider } = Layout;
class SiderCustom extends Component {
  state = {

  };
  render() {
    return (
      <Sider>
        <SiderMenu 
          menus={routes.menus}
          mode="inline"
          // onClick={this.menuClick}
          // selectedKeys={[selectedKey]}
          // openKeys={firstHide ? null : [openKey]}
          // onOpenChange={this.openMenu}
        />
      </Sider>
    )
  }
}
export default withRouter(SiderCustom);