import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import allComponents from '../components';
import routesConfig from './config';
import DocumentTitle from 'react-document-title';
import queryString from 'query-string';


export default class CRouter extends Component {
  render() {
    return (
      <Switch>
        {
          Object.keys(routesConfig).map(key => {
            routesConfig[key].map(r => {
              const route = r => {
                const Component = allComponents[r.component];
                return (
                  <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    render={props => {
                        const reg = /\?\S*/g;
                        // 匹配?及其以后字符串
                        const queryParams = window.location.hash.match(reg);
                        // 去除?的参数
                        const { params } = props.match;
                        Object.keys(params).forEach(key => {
                            params[key] = params[key] && params[key].replace(reg, '');
                        });
                        props.match.params = { ...params };
                        const merge = { ...props, query: queryParams ? queryString.parse(queryParams[0]) : {} };
                        // 重新包装组件
                        const wrappedComponent = (
                            <DocumentTitle title={r.title}>
                                <Component {...merge} />
                            </DocumentTitle>
                        )
                        return wrappedComponent
                        // return r.login
                        //     ? wrappedComponent
                        //     : this.requireLogin(wrappedComponent, r.auth)
                    }}
                  />
                )
              }
              return r.component ? route(r) : r.subs.map(r => route(r));
            })
          })
        }
      </Switch>
    )
  }
}
// export default function BasicExample(){
//   return (
//     <Router>
//       <div>
//          <div>
//            <Link to="/">首页</Link>
//          </div>
//          <div>
//           <Link to="/about">介绍</Link>
//          </div>
//          <div>
//           <Link to="/images">图片</Link>
//          </div>

//          <Switch>
//            <Route exact path="/">
//                 home
//            </Route>
//            <Route exact path="/about">
//                 about
//            </Route>
//            <Route exact path="/images">
//                 images
//            </Route>
//          </Switch>
//       </div>
//     </Router>
//   )
// }