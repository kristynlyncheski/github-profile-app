import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Repos from '../containers/Repos';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="repos" component={Repos} />
    </Route>
  </Router>
);

export default routes;
