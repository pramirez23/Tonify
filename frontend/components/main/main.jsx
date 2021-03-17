import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaylistItemContainer from '../playlist/playlist_item_container';
import AlbumItemContainer from '../album/album_item_container';
import NavbarContainer from '../navbar/navbar_container';
import LikedPlaylistsContainer from '../library/liked_playlists_container';
import LikedArtistsContainer from '../library/liked_artists_container';
import LikedAlbumsContainer from '../library/liked_albums_container';
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
          {/* <ProtectedRoute path="/library" component={LikedPlaylistsContainer} /> */}
          <ProtectedRoute path="/library/playlists" component={LikedPlaylistsContainer} />
          <ProtectedRoute path="/library/artists" component={LikedArtistsContainer} />
          <ProtectedRoute path="/library/albums" component={LikedAlbumsContainer} />
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