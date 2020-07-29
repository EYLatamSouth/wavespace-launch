import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wait from '../Wait/Wait';
import Holder from '../Holder/Holder';
import Wave2 from '../Wave2/Wave2';
import Code from '../Code/Code';
import Welcome from '../Welcome/Welcome';

const wave = () => (
  <div>
    <Wave2
      color="#ffe600"
      thickness={2}
      scale={0.1}
    />
  </div>
);

const welcomeFull = () => (
  <div>
    <Welcome
      full={true}
    />
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route path='/' exact={true} component={wave} />
      <Route path='/holder' component={Holder} />
      <Route path='/starter' component={Wait} />
      <Route path='/qrcode' component={Code} />
      <Route path='/welcome' component={Welcome} />
      <Route path='/welcome-sp' component={Welcome} />
      <Route path='/welcome-las' component={welcomeFull} />
    </Switch>
  </main>
);

export default Main;