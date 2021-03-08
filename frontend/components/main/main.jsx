import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaylistItemContainer from '../playlist/playlist_item_container';
import NavbarContainer from '../navbar/navbar_container';


const Main = (props) => {
  return (
    <div id="main">
      <Route path="/" component={NavbarContainer} />
      <main className="main-content-container">
        <Switch>
          {/* <Route path="/search" component={SearchIndex} /> */}
          {/* <Route path="/library/playlists" component={PlaylistIndex} /> */}
          {/* <Route path="/collection/artists" component={ArtistIndex} /> */}
          {/* <Route path="/library/albums" component={AlbumIndex} /> */}
          <Route exact path="/playlists/:id" component={PlaylistItemContainer} />
          {/* <Route path="/artists/:id" component={ArtistShow} /> */}
          {/* <Route path="/albums/:id" component={AlbumShow} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default Main;