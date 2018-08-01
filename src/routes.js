import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PlaceListPage from './containers/PlaceListPage';
import PlaceDetails from './containers/PlaceDetails';
import HostDashboard from './containers/HostDashboard';
import Dashboard from './components/HostDashboard/Dashboard';
import Place from './components/HostDashboard/Place';
import Room from './components/HostDashboard/Room';
import Booking from './components/HostDashboard/Booking';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="hostdashboard" component={HostDashboard}>
        <IndexRoute component={Dashboard}/>
        <Route path="place" component={Place}/>
        <Route path="room" component={Room}/>
        <Route path="booking" component={Booking}/>
      </Route>
      <Route path=":university" component={PlaceListPage}/>
      <Route path=":university/:place" component={PlaceDetails}/>
    </Route>

  </Route>
);
