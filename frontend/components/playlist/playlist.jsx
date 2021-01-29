import React from 'react';
import { Link } from 'react-router-dom';
import SongListItem from '../songs/song_list_item'

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlaylist(id);
    // this.props.fetchPlaylistSongs(id);
  }

  render() { 
    
    if (!this.props.playlist) {
      return null;
    }

    const playlistName = this.props.playlist.name;
    const userId = this.props.playlist.user_id;
    const username = this.props.users[userId].username;
    const songs = this.props.songs
    return (
      <div id="playlist-show">
          <div className="playlist-header">
            <img className="playlist-photo" src={window.defaultPlaylistPicture} />
            <div className="playlist-details">
              <span>PLAYLIST</span>
              <h1 className="playlist-name">{playlistName}</h1>
              <p className="username">{username}</p>
            </div>
          </div>

          <div className="show-page-controls">
            <img id="show-page-play" src={window.playButton} />
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div className="song-columns">
            <ul>
              <div className="num-title">
                <li className="song-column-num">#</li>
                <li className="song-column-title">TITLE</li>
              </div>
              <li className="song-column-album">ALBUM</li>
              <li className="song-column-date">DATE ADDED</li>
              <li className="song-column-duration"><i class="far fa-clock"></i></li>
            </ul>
              <span id="border-bottom"></span>
          </div>

          <div className="playlist-song-list">
            <ul className="song-list">
              {songs.map(song => 
                <SongListItem song={song} key={song.id} />
              )}
            </ul>
          </div>
      </div>
    );
  }
}   
export default Playlist;
