import React from 'react';
import { Link } from 'react-router-dom';
import SongListItem from '../songs/song_list_item'

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      isLiked: false,
      isLoading: true,
    }

    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlaylist(id).then( () => {
      this.setState({
        isLoading: false
      })
    });

    this.dropDownListener = e => {
      if (!this.dropDown.contains(e.target)) this.setState({
        hideDropDown: true
      });
    }

    document.addEventListener('click', this.dropDownListener, false);
  }

  componentWillUnmount() {

    document.removeEventListener('click', this.dropDownListener);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params;
      this.props.fetchPlaylist(id).then(() => {
        this.setState({
          isLoading: false 
        })
      });
    }
  }

  handleDropDown(e) {
    this.setState({
      hideDropDown: !this.state.hideDropDown
    })
  }

  render() { 
    if (this.state.isLoading) {
      return (
        <div className="spinner-container">
          <i className="fas fa-spinner"></i>
        </div>
      )
    }

    if (!this.props.playlist) {
      return null;
    }

    const playlist = this.props.playlist;
    const currentUser = this.props.currentUser;
    const playlistCreator = this.props.playlist.user_id;
    const username = this.props.users[playlistCreator].username;
    const songs = this.props.playlistSongs;

    const playlistContent = () => {
      return (
        <div id="playlist-show">
          <div className="playlist-header">
            <img className="playlist-photo" src={window.defaultPlaylistPicture} />
            <div className="playlist-details">
              <span>PLAYLIST</span>
              <h1 className="playlist-name">{playlist.name}</h1>
              <p className="username">{username}</p>
            </div>
          </div>
  
          <div className="show-page-controls">
            <img id="show-page-play" src={window.playButton} />

            <div className={`${currentUser === playlistCreator ? "hidden" : ""}`}>
              <i className="far fa-heart"></i>
            </div>

            <div className="dropdown" onClick={() => this.handleDropDown()} ref={div => this.dropDown = div}>
              <i className="fas fa-ellipsis-h"></i>
              {!this.state.hideDropDown && <div className="playlist-dropdown-options" onClick={e => e.stopPropagation()}>
                <div onClick={() => editPlaylist(playlist.id)} className="edit-playlist">Edit details</div>
                <div onClick={() => this.props.deletePlaylist(playlist.id)
                  .then(() => this.props.history.push("/library"))} className="delete-playlist">
                  Delete
                </div>
              </div>}
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
              <h1 className="playlist-name">{playlist.name}</h1>
              <p className="username">{username}</p>
            </div>
          </div>

          <div className="empty-playlist-controls">
            <div className="dropdown" onClick={() => this.handleDropDown()} ref={div => this.dropDown = div}>
              <i className="fas fa-ellipsis-h"></i>
              {!this.state.hideDropDown && <div className="playlist-dropdown-options" onClick={e => e.stopPropagation()}>
                <div onClick={() => editPlaylist(playlist.id)} className="edit-playlist">Edit details</div>
                <div onClick={() => this.props.deletePlaylist(playlist.id)
                  .then(() => this.props.history.push("/library"))} className="delete-playlist">
                    Delete
                </div>
              </div>}
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
