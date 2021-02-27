import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import PlaylistItemContainer from '../playlist/playlist_item_container';
// import SidebarContainer from '../sidebar/sidebar_container';
// import Playbar from '../playbar/playbar';

const Main = (props) => {
  return (
    <div id="main">
      {/* <SidebarContainer /> */}
        <Switch>
          {/* <Route path="/search" component={SearchIndex} /> */}
          {/* <Route path="/library/playlists" component={PlaylistIndex} /> */}
          {/* <Route path="/collection/artists" component={ArtistIndex} /> */}
          {/* <Route path="/library/albums" component={AlbumIndex} /> */}
          <Route exact path="/playlists/:id" component={PlaylistItemContainer} />
          {/* <Route path="/artists/:id" component={ArtistShow} /> */}
          {/* <Route path="/albums/:id" component={AlbumShow} /> */}
        </Switch>
        {/* <Playbar /> */}
    </div>
  )
}

export default Main;