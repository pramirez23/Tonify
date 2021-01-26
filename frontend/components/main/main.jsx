import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const main = (props) => {

  return (
    <div id="main-page">
      <NavBarContainer />
      <SideBarContainer />
      <PlayBarContainer />
    </div>
  )
}