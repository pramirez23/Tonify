import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
// import GreetingContainer from "./greeting/greeting_container";
import Modal from './modal';
import LoginContainer from "./session/login_container";
import SignupContainer from "./session/signup_container";
import SplashContainer from "./splash/splash_container";
import SidebarContainer from './sidebar/sidebar_container';
import NavbarContainer from './navbar/navbar_container';
import Playbar from './playbar/playbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import PlaylistContainer from "./playlist/playlist_container"

const App = () => (
  <div id="app">
    <Modal />
    <ProtectedRoute path="/" component={SidebarContainer} />
    <ProtectedRoute path="/" component={NavbarContainer} />
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route path="/" component={SplashContainer}/>
    </Switch>
    <ProtectedRoute path="/" component={Playbar} />
  </div>
);

export default App;

