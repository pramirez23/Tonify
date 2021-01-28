import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
// import GreetingContainer from "./greeting/greeting_container";
import LoginContainer from "./session/login_container";
import SignupContainer from "./session/signup_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Playlist from "./playlist/playlist"

const App = () => (
  <div id="app">
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route path="/" component={SplashContainer}/>
    </Switch>
  </div>
);

export default App;

