import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import { renderTotalDuration } from '../../util/time_util'
import SongListItem from '../songs/song_list_item'

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      isLiked: false,
    }

    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.dropDownListener = e => {
      if (this.dropDown &&!this.dropDown.contains(e.target)) this.setState({
        hideDropDown: true
      });
    }

    document.addEventListener('click', this.dropDownListener, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.dropDownListener);
  }

  handleDropDown(e) {
    this.setState({
      hideDropDown: !this.state.hideDropDown
    })
  }

  handleEdit(id) {
    this.setState({
      hideDropDown: true
    })
    this.props.editPlaylist(id)
  }

  handleDelete(id) {
    this.setState({
      hideDropDown: true
    })
    this.props.deletePlaylist(id)
  }

  render() { 
    const { playlist, currentUser, playlistCreator, username, songs } = this.props
    const playlistDuration = Object.values(songs).map(song => song.duration).reduce((a, b) => a + b, 0);
    const renderPlaylistDuration = renderTotalDuration(playlistDuration);

    if (!playlist || !songs) {
      return null;
    }

    const playlistContent = () => {
      return (
        <div id="playlist-show">
          <div className="playlist-header">
            <img className="playlist-photo" src={window.defaultPlaylistPicture} />
            <div className="playlist-details">
              <span>PLAYLIST</span>
              <h1 className="playlist-name">{playlist.name}</h1>
              <p className="playlist-description">{playlist.description}</p>
              <p className="username">{username} • {`${songs.length} songs, ${renderPlaylistDuration}`}</p>
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
                <div onClick={() => this.handleEdit(playlist.id)} className="edit-playlist">Edit details</div>
                <div onClick={() => this.handleDelete(playlist.id)} className="delete-playlist">Delete</div>
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
                <SongListItem
                  song={song}
                  key={idx}
                  num={(idx + 1)}
                />
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
                <div onClick={() => this.handleEdit(playlist.id)} className="edit-playlist">Edit details</div>
                <div onClick={() => this.handleDelete(playlist.id)} className="delete-playlist">Delete</div>
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

    return songs.length === 0 ? emptyPlaylist() : playlistContent();
  }
}  

const mDTP = dispatch => {
  return {
    editPlaylist: id => dispatch(openModal(id, 'editPlaylist')),
    deletePlaylist: id => dispatch(openModal(id, 'deletePlaylist'))
  }
};

export default withRouter(connect(null, mDTP)(Playlist)); 
