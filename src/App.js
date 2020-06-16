import React, { Component} from 'react';
import Route from './routes/index'
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';

const { Content, Footer } = Layout

class App extends Component {
  state = {
    collapsed: false,
    title: ''
  };
  render() {
    const { title } = this.state;
    // const { auth = { data: {} }, responsive = { data: {} } } = this.props;
    return (
      <DocumentTitle title={title}>
        <Layout>
          <SiderCustom collapsed={this.state.collapsed} />
          <Layout style={{flexDirection: 'column'}}>
            <HeaderCustom />
              <Content>
                <Route />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                @xiaoxiangshu Practice Demo
              </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    )
  }
}

export default App;
