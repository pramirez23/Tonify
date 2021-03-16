import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaylistItemContainer from '../playlist/playlist_item_container';
import LikedSongsContainer from '../library/liked_songs_container';
import AlbumItemContainer from '../album/album_item_container';
import NavbarContainer from '../navbar/navbar_container';
import Loading from '../loading/loading';
import Playbar from '../playbar/playbar';
import SidebarContainer from '../sidebar/sidebar_container';
import { ProtectedRoute } from '../../util/route_util';

const Main = (props) => {
  return (
    <>
    <ProtectedRoute path="/" component={SidebarContainer} />
    <div id="main">
      <Route path="/" component={NavbarContainer} />
      <main className="main-content-container">
        <Loading />
        <Switch>
          {/* <Route path="/search" component={SearchIndex} /> */}
          {/* <Route path="/library/playlists" component={PlaylistIndex} /> */}
          {/* <Route path="/library/artists" component={ArtistIndex} /> */}
          {/* <Route path="/library/albums" component={AlbumIndex} /> */}
          <ProtectedRoute path="/library/songs" component={PlaylistItemContainer} />
          <ProtectedRoute exact path="/playlists/:id" component={PlaylistItemContainer} />
          {/* <ProtectedRoute path="/artists/:id" component={ArtistShow} /> */}
          <ProtectedRoute path="/albums/:id" component={AlbumItemContainer} />
        </Switch>
      </main>
    </div>
    <ProtectedRoute path="/" component={Playbar} />
    </>
  )
}

export default Main;