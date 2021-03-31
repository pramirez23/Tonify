import React from 'react';
import SongListItem from '../songs/song_list_item';
import LibraryItemContainer from '../library/library_item_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { currentUser, searchResults, searchPlaylistIds, history, playlists, artists, albums, songs } = this.props;
    return (
      <>
        <div className={!searchResults ? "browse-genres-container" : "hidden"}>
          <h1 className="search-title">Browse all</h1>

          <div className="search-index">
            <div
              id="hiphop"
              onClick={() => history.push('/genres/hiphop')}
              className="genre-button">Hip hop</div>
            <div
              id="pop"
              onClick={() => history.push('/genres/pop')}
              className="genre-button">Pop</div>
            <div
              id="rock"
              onClick={() => history.push('/genres/rock')}
              className="genre-button">Rock</div>
            <div
              id="rnb"
              onClick={() => history.push('/genres/rnb')}
              className="genre-button">R&B</div>
          </div>
        </div>

        <div className={searchResults ? "search-results-container" : "hidden"}>
          <div className={Object.entries(songs).length > 0 ? "search-songs-container" : "hidden"}>
            <h2 className="artist-songs-title">Songs</h2>
            <table className="song-columns">
              <tbody>
                {Object.values(songs).slice(0).map((song, idx) =>
                  <SongListItem
                    song={song}
                    key={idx}
                    num={(idx + 1)}
                    currentUser={currentUser}
                  />)}
              </tbody>
            </table>
          </div>

          <div className={Object.entries(artists).length > 0 ? "artist-discography" : "hidden"}>
            <h2 className="artist-title">Artists</h2>
            <div className="library-index">
              {Object.values(artists).map(((artist, idx) =>
                <LibraryItemContainer
                  id={artist.id}
                  artist={artist}
                  key={idx}
                  itemType="Artist" />
              ))}
            </div>
          </div>

          <div className={Object.entries(albums).length > 0 ? "artist-discography" : "hidden"}>
            <h2 className="artist-title">Albums</h2>
            <div className="library-index">
              {Object.values(albums).map(((album, idx) =>
                <LibraryItemContainer
                  id={album.id}
                  album={album}
                  key={idx}
                  itemType="Album" />
              ))}
            </div>
          </div>

          <div className={searchPlaylistIds.length > 0 ? "artist-playlists" : "hidden"}>
            <h2 className="artist-title">Playlists</h2>
            <div className="library-index">
              {Object.values(playlists).filter(playlist => searchPlaylistIds.includes(playlist.id)).map(((playlist, idx) =>
                <LibraryItemContainer
                  id={playlist.id}
                  playlist={playlist}
                  key={idx}
                  itemType="Playlist" />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
