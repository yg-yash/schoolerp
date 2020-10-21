import {
  BackendError,
  Lockscreen,
  NotFound,
  PasswordReset,
  Signin,
  Signup,
} from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppProvider from './components/AppProvider/AppProvider';
import Dashboard from './containers/Dashboard';
import Login from './pages/Login';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import AuthRoute from './utils/AuthRoute';

render(
  <AppProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/500" component={BackendError} />
        <AuthRoute exact path="/Lockscreen" component={Lockscreen} />
        <AuthRoute exact path="/forgot" component={PasswordReset} />
        <AuthRoute exact path="/signin" component={Signin} />
        <AuthRoute exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <AuthRoute path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
);

registerServiceWorker();
