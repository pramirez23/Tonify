import React from 'react';
import { withRouter } from 'react-router-dom';
import LibraryItemContainer from './library_item_container';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    }

    this.handleCreate = this.handleCreate.bind(this);
    this.renderEmptyPlaylists = this.renderEmptyPlaylists.bind(this);
    this.renderEmptyArtists = this.renderEmptyArtists.bind(this);
    this.renderEmptyAlbums = this.renderEmptyAlbums.bind(this);
    this.emptyOrFilled = this.emptyOrFilled.bind(this);
  }

  componentDidMount() {
    this.emptyOrFilled();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.emptyOrFilled();
    }
  }
  
  handleCreate(e) {
    e.preventDefault();
    const userPlaylists = Object.values(this.props.playlists)
    const newPlaylist = {
      user_id: this.props.currentUser,
      name: `My Playlist #${userPlaylists.length + 1}`,
      private: false
    }
    this.props.createPlaylist(newPlaylist)
      .then(() => this.props.history.push(`/playlists/${this.props.lastPlaylist}`));
  };

  renderEmptyPlaylists() {
    return (
      <div className="empty-liked-playlists">
        <i className="fas fa-music"></i>
        <p className="empty-liked-playlist-title">Create your first playlist</p>
        <p className="empty-liked-playlist-text">It's easy, we'll help you.</p>
        <button className="liked-create-playlist" onClick={this.handleCreate}>CREATE PLAYLIST</button>
      </div>
    )
  }

  renderEmptyArtists() {
    return (
      <div className="empty-liked-artists">
        <i className="fas fa-music"></i>
        <p className="empty-liked-playlist-title">Create your first playlist</p>
        <p className="empty-liked-playlist-text">It's easy, we'll help you.</p>
        <button className="liked-create-playlist" onClick={this.handleCreate}>CREATE PLAYLIST</button>
      </div>
    )
  }

  renderEmptyAlbums() {
    return (
      <div className="empty-liked-albums">
        <i className="fas fa-music"></i>
        <p className="empty-liked-playlist-title">Create your first playlist</p>
        <p className="empty-liked-playlist-text">It's easy, we'll help you.</p>
        <button className="liked-create-playlist" onClick={this.handleCreate}>CREATE PLAYLIST</button>
      </div>
    )
  }

  renderIndex(location) {
    const { playlists, artists, albums } = this.props;

    switch (location) {
      case "playlists":
        return (
          <>
            <div className="playlist-index">
              <div className="liked-songs-shortcut">
                <span>liked-songs-shortcut</span>
              </div>
              {Object.entries(playlists).map(((playlist, idx) =>
                <LibraryItemContainer
                  playlist={playlist}
                  key={idx}/>
              ))}
            </div>
          </>
        )
      case "artists":
        return (
          <div className="artist-index">
            {Object.entries(artists).map(((artist, idx) =>
              <LibraryItemContainer
                artist={artist}
                key={idx} />
            ))}
          </div>
        )
      case "albums":
        return (
          <div className="album-index">
            {Object.entries(albums).map(((album, idx) =>
              <LibraryItemContainer
                album={album}
                key={idx} />
            ))}
          </div>
        )
      default:
        break;
    }
  }

  emptyOrFilled() {
    const { playlists, artists, albums } = this.props; 
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[2];

    switch (location) {
      case "playlists":
        return !playlists ? this.renderEmptyPlaylists() : this.renderIndex(location)
      case "artists":
        return !artists ? this.renderEmptyArtists() : this.renderIndex(location)
      case "albums":
        return !albums ? this.renderEmptyAlbums() : this.renderIndex(location)
      default:
        break;
    }
  }

  render() { 
    return (
      <div className="library-container">
        {this.emptyOrFilled()}
      </div>
    );
  }
}
 
export default Library;