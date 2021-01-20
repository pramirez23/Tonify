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

const App = () => (
  <div>
    <header>
      <h1>Tonify</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;

