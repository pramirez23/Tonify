import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container'
import Playbar from '../playbar/playbar'
import { logout } from '../../actions/session_actions';

const Main = (props) => {
  return (
    <div id="main">
      {/* <NavBarContainer /> */}
      <SidebarContainer />
      <Playbar />
    </div>
  )
}

export default Main;