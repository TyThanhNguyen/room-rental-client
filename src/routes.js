import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/HomePage';

export default (
  <Route>
    <Route path="/" component={HomePage}>
    </Route>
  </Route>
);
