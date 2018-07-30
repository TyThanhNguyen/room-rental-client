import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/HomePage';
import PlaceListPage from './containers/PlaceListPage';
import PlaceDetails from './containers/PlaceDetails';
import App from './containers/App';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path=":university" component={PlaceListPage}/>
      <Route path=":university/:place" component={PlaceDetails}/>
    </Route>
  </Route>
);
