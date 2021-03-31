import React from 'react';
import { connect } from "react-redux";
import LibraryItemContainer from "../library/library_item_container";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { currentUser, homePlaylistIds, playlists, artists, albums } = this.props;
    const homePlaylists = Object.values(playlists).filter(playlist => homePlaylistIds.includes(playlist.id))

    return (
      <div className="genre-page-container">
        <div
          className="genre-page-header"
          id="home-header">
          <h1 className="genre-page-title">
            Welcome, {currentUser}
          </h1>
        </div>

        <div className="home-section-container">
          <div className="genre-section">
            <h1 className="library-title">Popular Artists</h1>
            <div className="library-index">
              {Object.values(artists).map(((artist, idx) =>
                <LibraryItemContainer
                  id={artist.id}
                  artist={artist}
                  key={idx}
                  itemType={"Artist"} />
              ))}
            </div>
          </div>
        </div>

        <div className="home-section-container">
          <div className="genre-section">
            <h1 className="library-title">Popular Albums</h1>
            <div className="library-index">
              {Object.values(albums).map(((album, idx) =>
                <LibraryItemContainer
                  id={album.id}
                  album={album}
                  key={idx}
                  itemType={"Album"} />
              ))}
            </div>
          </div>
        </div>

        <div className="home-section-container">
          <div className="genre-section">
            <h1 className="library-title">Trending Playlists</h1>
            <div className="library-index">
              {homePlaylists.map(((playlist, idx) =>
                <LibraryItemContainer
                  id={playlist.id}
                  playlist={playlist}
                  key={idx}
                  itemType={"Playlist"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = state => {
  const { playlists, artists, albums, users } = state.entities;
  const currentUser = users[state.session.id].username;
  const homePlaylistIds = (state.ui.pagePlaylists);

  return {
    homePlaylistIds,
    playlists,
    currentUser,
    artists,
    albums
  }
}

export default connect(mSTP)(Home);