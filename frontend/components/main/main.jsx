import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import Genre from '../genre/genre';
import PlaylistItemContainer from '../playlist/playlist_item_container';
import ArtistContainer from '../artist/artist_container';
import AlbumItemContainer from '../album/album_item_container';
import NavbarContainer from '../navbar/navbar_container';
import SearchContainer from '../search/search_container';
import LibraryContainer from '../library/library_container';
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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/search" component={SearchContainer} />
          <ProtectedRoute path="/genres" component={Genre} />
          <ProtectedRoute path="/library/playlists" component={LibraryContainer} />
          <ProtectedRoute path="/library/artists" component={LibraryContainer} />
          <ProtectedRoute path="/library/albums" component={LibraryContainer} />
          <ProtectedRoute path="/library/songs" component={PlaylistItemContainer} />
          <ProtectedRoute exact path="/playlists/:id" component={PlaylistItemContainer} />
          <ProtectedRoute exact path="/artists/:id" component={ArtistContainer} />
          <ProtectedRoute exact path="/albums/:id" component={AlbumItemContainer} />
        </Switch>
      </main>
    </div>
    <ProtectedRoute path="/" component={Playbar} />
    </>
  )
}

export default Main;