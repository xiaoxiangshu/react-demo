import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

export default () => (
    <Router>
        <Switch>
            <Route component={App}/>        
        </Switch>
    </Router>
)