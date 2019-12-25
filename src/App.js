import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LazyEmployee from './containers/Employees/LazyEmployee'
import Drawer from './drawer'

function App() {
  const guestRoutes = <></>
  const userRoutes =
    <>
      <Switch>
        <Route exact path="/employees">
          <LazyEmployee />
        </Route>
        <Route exact path="/dashboard">
        </Route>
        <Route exact path="/logout">
        </Route>
      </Switch>
    </>
  const isAuthenticated = true;
  return (
    isAuthenticated ? <Drawer userRoutes={userRoutes} /> : <Drawer guestRoutes={guestRoutes} />
  );
}

export default App;
