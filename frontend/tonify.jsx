import React from "react";
import ReactDOM from "react-dom";
import { signin, signup, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  window.signin = signin;
  window.signup = signup;
  window.logout = logout;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Tonify!</h1>, root);
});