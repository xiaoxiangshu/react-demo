import React, { useState } from 'react';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';


// import { 
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined, } from '@ant-design/icons';

// const renderMenuItem = item => ( // item.route 菜单单独跳转的路由
//   <Menu.Item
//       key={item.key}
//   >
//           <span className="nav-text">{item.title}</span>
//       {/* <Link to={(item.route || item.key) + (item.query || '')}> */}
//           {/* {item.icon && <Icon type={item.icon} />} */}
//       {/* </Link> */}
//   </Menu.Item>
// );
const renderMenuItem = item => (
  <Menu.Item
    key={item.key}
  >
    <span className="nav-text">{item.title}</span>
  </Menu.Item>
)

const renderSubMenu = item => (
  <Menu.SubMenu
  key={item.key}
  title={
      <span>
          {/* {item.icon && <Icon type={item.icon} />} */}
          <span className="nav-text">{item.title}</span>
      </span>
  }>
    {item.subs.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
)

export default ({ menus, ...props}) => {
  const [dragItems, setDragItems] = useState(menus);

  return (
    <div>
      {dragItems.map((item, index) => (
          <Menu 
            theme="dark"
            key={index}
            {...props}
          >
            {item.subs ? renderSubMenu(item) : renderMenuItem(item)}
          </Menu>
        ))
      }
    </div>
  )
}