import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { signup, login, logout } from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING START
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});