import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SideBarContainer from '../sidebar/sidebar_container'
import { logout } from '../../actions/session_actions';

const Main = (props) => {
  return (
    <div id="main">
      {/* <NavBarContainer /> */}
      <SideBarContainer />
      {/* <PlayBarContainer /> */}
    </div>
  )
}

export default Main;