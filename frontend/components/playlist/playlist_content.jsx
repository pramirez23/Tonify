import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import { fetchPlaylist } from '../../actions/playlist_actions'
import { renderDateAdded, renderTotalDuration } from '../../util/time_util';
import SongListItem from '../songs/song_list_item'

class Playlist extends React.Component {
  _isMounted = false;

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
    this.emptyOrFilled = this.emptyOrFilled.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    this.dropDownListener = e => {
      if (this.dropDown &&!this.dropDown.contains(e.target)) {
        if (this._isMounted) {
          this.setState({
            hideDropDown: true
          });
        }
      }
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

  emptyOrFilled() {
    const { playlist, currentUser, songs, history } = this.props
    const playlistSongs = Object.entries(songs);

    if (playlistSongs.length > 0 ) {
      return (
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
            {playlistSongs.slice(0).reverse().map((song, idx) =>
              <SongListItem
                song={song[1]}
                dateAdded={renderDateAdded(song[1].created_at)}
                playlistSongId={song[0]}
                key={idx}
                num={(idx + 1)}
                history={history}
                currentUser={currentUser}
                playlist={playlist}
              />
            )}
          </tbody>
        </table>
      )
    } else {
      return (
        <div className="empty-playlist">
          <i className="fas fa-compact-disc"></i>
          <p>It looks like you don't have anything in this playlist yet.</p>
          <p> <Link to="/search">Search</Link> for some songs to add!</p>
        </div>
      )
    }
  }

  render() { 
    const { playlist, currentUser, playlistCreator, username, songs } = this.props
    const playlistSongs = Object.entries(songs);
    const playlistDuration = Object.values(songs).map(song => song.duration).reduce((a, b) => a + b, 0);
    const renderPlaylistDuration = renderTotalDuration(playlistDuration);

    const playlistDetails = () => {
      if (playlistSongs.length > 1) {
        return `• ${playlistSongs.length} songs, ${renderPlaylistDuration}`;
      } else if (playlistSongs.length === 1)  {
        return `• 1 song, ${renderPlaylistDuration}`;
      } else {
        return ""
      }
    }

    if (!playlist || !songs) {
      return null;
    }

    return (
      <div className="main-content">
        <div className="playlist-header">
          <img className="playlist-photo" onClick={() => this.handleEdit(playlist.id)} src={playlist.photo_url ? playlist.photo_url : window.defaultPlaylistPicture} />
          <div className="playlist-details">
            <span>PLAYLIST</span>
            <h1 className="playlist-name" onClick={() => this.handleEdit(playlist.id)}>{playlist.name}</h1>
            <div className="description-name-container">
              <p className={playlist.description ? "playlist-description" : "hide-description"}>{playlist.description}</p>
              <p className="username">{username} {playlistDetails()}</p>
            </div>
          </div>
        </div>

        <div className={ playlistSongs.length ? "show-page-controls" : "empty-playlist-controls" }>
          <img id={ playlistSongs.length ? "show-page-play" : "hidden"} src={window.playButton} />

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

        {this.emptyOrFilled()}
      </div>
    )
  }
}  

const mSTP = state => {
  const { songs } = state.entities;
  return { songs };
};

const mDTP = dispatch => {
  return {
    editPlaylist: id => dispatch(openModal(id, 'editPlaylist')),
    deletePlaylist: id => dispatch(openModal(id, 'deletePlaylist')),
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
  }
};

export default withRouter(connect(mSTP, mDTP)(Playlist)); 
