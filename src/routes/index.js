import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Main from '~/pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Main} />
    </Switch>
  );
}
