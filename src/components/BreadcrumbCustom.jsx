import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
class BreadcrumbCustom extends React.Component {
  render() {
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
    return (
      <span>
        <BreadCrumb>
          <Breadcrumb.Item><Link to={'/app/dashboard/index'}>首页</Link>
            {first}
            {second}
          </Breadcrumb.Item>
        </BreadCrumb>
      </span>
    )
  }
}