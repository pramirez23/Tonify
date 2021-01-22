import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginContainer from "./session/login_container";
import SignupContainer from "./session/signup_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Tonify</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      {/* <Route path="/" component={Splash}/> */}
    </Switch>
  </div>
);

export default App;

