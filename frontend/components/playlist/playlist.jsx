import React from 'react';
import { Link } from 'react-router-dom';
import SongListItem from '../songs/song_list_item'

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDropdown: true,
      isLiked: false
    }

    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlaylist(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params;
      this.props.fetchPlaylist(id);
    }
  }

  handleDropDown(e) {
    this.setState({
      hideDropdown: !this.state.hideDropdown
    })
    e.stopPropagation();
  }

  render() { 
    if (!this.props.playlist) {
      return null;
    }

    const playlistName = this.props.playlist.name;
    const currentUser = this.props.currentUser;
    const userId = this.props.playlist.user_id;
    const username = this.props.users[userId].username;
    const songs = this.props.playlistSongs;

    const playlistContent = () => {
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

            <div className={`${currentUser === userId ? "hidden" : ""}`}>
              <i className="far fa-heart"></i>
            </div>

            <div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          
          <table className="song-columns">
            <thead>
              <tr className="song-column-header">
                <th className="song-column-num">#</th>
                <th className="song-column-title">TITLE</th>
                <th className="song-column-album">ALBUM</th>
                <th className="song-column-date">DATE ADDED</th>
                <th className="song-column-duration"><i className="far fa-clock"></i></th>
              </tr>
            </thead>
  
            <tbody>
              <tr className="null-row"><td className="null-td"></td></tr>
              {songs.map((song, idx) => 
                <SongListItem song={song} key={idx} num={(idx + 1)} />
              )}
            </tbody>
          </table>
        </div>
      );
    }

    const emptyPlaylist = () => {
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
          <div className="empty-playlist">
            <i className="fas fa-compact-disc"></i>
            <p>It looks like you don't have anything in this playlist yet.</p>
            <p> <Link to="/search">Search</Link> for some songs to add!</p>
          </div>
        </div>
      )
    }
    // debugger
    return songs.length === 0 ? emptyPlaylist() : playlistContent();
  }
}   
export default Playlist;
