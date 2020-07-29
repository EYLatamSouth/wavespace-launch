import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Wave2 from "../Wave2";
import Holder from "../Holder";
import Waiting from "../Waiting";
import ViewQrCode from "../ViewQrCode";
import Welcome from "../Welcome";

function WaveOnly () {
  return (
    <div>
      <Wave2
        thickness={4}
        scale={0.1}
      />
    </div>
  );
}

function WelcomeFull() {
  return (
    <div>
      <Welcome
        full={true}
      />
    </div>
  );
}

export default function Main() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/' component={Holder} />
          <Route path='/line' component={WaveOnly} />
          <Route path='/starter' component={Waiting} />
          <Route path='/qrcode' component={ViewQrCode} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/welcome-sp' component={Welcome} />
          <Route path='/welcome-las' component={WelcomeFull} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}