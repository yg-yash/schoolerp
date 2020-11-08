import {
  BackendError,
  Lockscreen,
  NotFound,
  PasswordReset,
  Signin,
  Signup,
} from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppProvider from './components/AppProvider/AppProvider';
import Dashboard from './containers/Dashboard';
import Login from './pages/Login';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import AuthRoute from './utils/AuthRoute';
import configureStore from './store/configureStore';
import { Provider, useSelector } from 'react-redux';
const { persistor, store } = configureStore();

render(
  <AppProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </AppProvider>,
  document.getElementById('root')
);

registerServiceWorker();
