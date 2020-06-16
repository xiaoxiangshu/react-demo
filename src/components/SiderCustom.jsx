import React, { Component } from 'react'
import { Layout } from 'antd'
import routes from '../routes/config';
import { withRouter } from 'react-router-dom'
import SiderMenu from './SiderMenu';

const { Sider } = Layout;
class SiderCustom extends Component {
  static setMenuOpen = props => {
    const { pathname } = props.location
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    }
  }
  state = {
    mode: 'inline',
    openKey: '',
    selectedKey: '',
    firstHide: false,
  };
  componentDidMount() {
    const state = SiderCustom.setMenuOpen(this.props)
    this.setState(state)
  }
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    console.log(111111, this.props)
    const { popoverHide } = this.props

    popoverHide && popoverHide(); // ?
  }
  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false
    })
  }
  render() {
    const { selectedKey, openKey, firstHide, collapsed} = this.state
    return (
      <Sider
        collapsed={collapsed}
        breakpoint="lg"
        style={{ overflowY: 'auto'}}
      >
        <SiderMenu 
          menus={routes.menus}
          mode="inline"
          onClick={this.menuClick}
          selectedKeys={[selectedKey]}
          openKeys={firstHide ? null : [openKey]}
          onOpenChange={this.openMenu}
        />
      </Sider>
    )
  }
}

export default withRouter(SiderCustom);
