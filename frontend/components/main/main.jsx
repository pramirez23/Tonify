import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import PlaylistContainer from '../playlist/playlist_container';
import SidebarContainer from '../sidebar/sidebar_container';
import Playbar from '../playbar/playbar';

const Main = (props) => {
  return (
    <div id="main">
      {/* <div className={`main-content ${page}`} > */}
      <SidebarContainer />
      <Switch>
        {/* <Route path="/search" component={SearchIndex} /> */}
        {/* <Route path="/library/playlists" component={PlaylistIndex} /> */}
        {/* <Route path="/collection/artists" component={ArtistIndex} /> */}
        {/* <Route path="/library/albums" component={AlbumIndex} /> */}
        <Route path="/playlists/:id" component={PlaylistContainer} />
        {/* <Route path="/artists/:id" component={ArtistShow} /> */}
        {/* <Route path="/albums/:id" component={AlbumShow} /> */}
      </Switch>
      <Playbar />
      {/* </div> */}
    </div>
  )
}

export default Main;