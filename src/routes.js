import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/HomePage';
import PlaceListPage from './containers/PlaceListPage';
import App from './containers/App';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="placelist" component={PlaceListPage}/>
    </Route>
  </Route>
);
