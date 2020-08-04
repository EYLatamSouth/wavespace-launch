import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import history from "../../utils/history";

import Holder from "../Holder";
import HolderFull from "../HolderFull";
import Welcome from "../Welcome";

function WelcomeFull() {
  return (
    <Fragment>
      <Welcome full />
    </Fragment>
  );
}

export default function Main() {
  return (
    <main>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Holder} />
          <Route exact path='/las' component={HolderFull} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/welcome-sp' component={Welcome} />
          <Route path='/welcome-las' component={WelcomeFull} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}