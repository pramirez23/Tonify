import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal';
import LoginContainer from "./session/login_container";
import SignupContainer from "./session/signup_container";
import SplashContainer from "./splash/splash_container";
import SidebarContainer from './sidebar/sidebar_container';
import Playbar from './playbar/playbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    <Modal />
    <ProtectedRoute path="/" component={SidebarContainer} />
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route path="/" component={SplashContainer}/>
    </Switch>
    <ProtectedRoute path="/" component={Playbar} />
  </div>
);

export default App;

