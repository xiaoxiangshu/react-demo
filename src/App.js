import React, { Component} from 'react';
import Route from './routes/index'
import DocumentTitle from 'react-document-title'
import { Layout, notification, Icon } from 'antd';
import SiderCustom from './components/SiderCustom';
import './App.css';

class App extends Component {
  state = {
    collapsed: false,
    title: ''
  };
  render() {
    const { title } = this.state;
    const { auth = { data: {} }, responsive = { data: {} } } = this.props;
    return (
      <DocumentTitle title={title}>
        <Layout style={{flexDirection: 'column'}}>
          <SiderCustom/>
          <Layout>
            <Route />
          </Layout>
        </Layout>
      </DocumentTitle>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Route />
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
