import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { like, unlike } from '../../actions/library_actions';
import { renderDateAdded, renderTotalDuration } from '../../util/time_util';
import { openAlert, closeAlert } from '../../actions/alert_actions';
import SongListItem from '../songs/song_list_item'

class Playlist extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      isLiked: false,
      location: null
    }

    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.emptyOrFilled = this.emptyOrFilled.bind(this);
  }

  componentDidMount() {
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    this._isMounted = true;
    this.dropDownListener = e => {
      if (this.dropDown &&!this.dropDown.contains(e.target)) {
        if (this._isMounted) {
          this.setState({
            hideDropDown: true,
            location
          });
        }
      }
    }

    document.addEventListener('click', this.dropDownListener, false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const pathName = this.props.location.pathname.split('/');
      const location = pathName[1];

      this._isMounted = true;
      this.dropDownListener = e => {
        if (this.dropDown && !this.dropDown.contains(e.target)) {
          if (this._isMounted) {
            this.setState({
              hideDropDown: true,
              location
            });
          }
        }
      }

      document.addEventListener('click', this.dropDownListener, false);
    }
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
    const { currentUser, playlists } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    let playlist = playlists[this.props.match.params.id];
    let playlistCreator = playlist.user_id;

    if (currentUser === playlistCreator && location === "playlists") {
      this.setState({
        hideDropDown: true
      })
      this.props.editPlaylist(id)
    } else {
      return;
    }
  }

  handleDelete(id) {
    this.setState({
      hideDropDown: true
    })
    this.props.deletePlaylist(id)
  }

  emptyOrFilled() {
    const { playlist, currentUser, songs, history } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    let playlistSongs, likedSongs, content;
    
    if (location === "playlists") {
      playlistSongs = Object.entries(songs);
    } else if (location === "library") {
      likedSongs = Object.values(songs);
    }
    
    if (playlistSongs && playlistSongs.length > 0 ) {
      content = (
        playlistSongs.slice(0).map((song, idx) =>
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
        )
      )
    } else if (likedSongs && likedSongs.length > 0) {
      content = (
        likedSongs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((song, idx) =>
          <SongListItem
            song={song}
            dateAdded={renderDateAdded(song.created_at)}
            playlistSongId={song[0]}
            key={idx}
            num={(idx + 1)}
          />
        )
      )
    }
      
    let renderPlaylist = (
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
          {content}
        </tbody>
      </table>
    )

    if (playlistSongs && playlistSongs.length === 0) {
      renderPlaylist = (
        <div className="empty-playlist">
          <i className="fas fa-compact-disc"></i>
          <p>It looks like you don't have anything in this playlist yet.</p>
          <p> <Link to="/search">Search</Link> for some songs to add!</p>
        </div>
      )
    } else if (likedSongs && likedSongs.length === 0) {
      renderPlaylist = (
        <div className="empty-liked-songs">
          <span id="empty-liked-icon" className="material-icons">music_note</span>
          <p className="empty-header">Songs you like will appear here</p>
          <p className="empty-details">Save songs by tapping the heart icon.</p>
          <button className="find-songs">FIND SONGS</button>
        </div>
      )
    }

    return renderPlaylist;
  }

  render() { 
    const { likedPlaylists, songs, users, currentUser, playlists } = this.props
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    if (!songs || !playlists || this.props.loading) {
      return null;
    }

    let playlist, playlistSongs, playlistCreator, username, likedSongs, renderHeart;
    
    if (location === "playlists") {
      playlist = playlists[this.props.match.params.id];
      playlistSongs = Object.entries(songs);

      if (!playlist) { return null }
      
      playlistCreator = playlist.user_id;
      username = playlist.creator;
    } else {
      likedSongs = Object.entries(songs);
      username = users[currentUser].username;
    }

    if (location === "playlists" && !likedPlaylists[playlist.id]) {
      renderHeart = (
        <i
          className="far fa-heart"
          onClick={() =>
            this.props.likePlaylist(playlist.id, "Playlist")
              .then(() => {
                this.props.openAlert("Library Add");
                setTimeout(this.props.closeAlert, 4000);
              })}>
        </i>
      )
    } else {
      renderHeart = (
        <i
          id="liked-song-heart"
          className="fas fa-heart"
          onClick={() => {
            this.props.unlikePlaylist(playlist.id, "Playlist")
              .then(() => {
                this.props.openAlert("Library Remove");
                setTimeout(this.props.closeAlert, 4000);
              })
          }}>
        </i>
      )
    }

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

    const likedSongsDetails = () => {
      if (likedSongs.length > 1) {
        return `• ${likedSongs.length} songs`;
      } else if (likedSongs.length === 1) {
        return `• 1 song`;
      } else {
        return ""
      }
    }

    return (
      <div className="main-content">
        <div className={location === "playlists" ? "playlist-header" : "liked-songs-header"}>
          <img
            className={location === "playlists" ? "playlist-photo" : "hidden"}
            onClick={() => this.handleEdit(playlist.id)}
            src={(playlist && playlist.photo_url) ? playlist.photo_url : window.defaultPlaylistPicture} />
          <img className={location === "library" ? "liked-songs-photo" : "hidden"} src={window.likedSongs} />

          <div className={location === "playlists" ? "playlist-details" : "liked-songs-details"}>
            <span>PLAYLIST</span>
            <h1
              className={location === "playlists" && playlistCreator === currentUser ? "playlist-name" : "liked-songs-title"}
              onClick={() => this.handleEdit(playlist.id)}>
                {playlist ? playlist.name : "Liked Songs"}
            </h1>
            
            <div className="description-name-container">
              <p className={playlist && playlist.description ? "playlist-description" : "hide-description"}>{playlist ? playlist.description : ""}</p>
              <div className="playlist-info">
                <p className="username">{username}</p>
                {location === "playlists" ? playlistDetails() : likedSongsDetails()}
              </div>
            </div>
          </div>
        </div>

        <div className={ (playlist && playlistSongs.length || likedSongs && likedSongs.length) ? "show-page-controls" : "empty-playlist-controls" }>
          <img id={(playlist && playlistSongs.length || likedSongs && likedSongs.length) ? "show-page-play" : "hidden"} src={window.playButton} />

          <div className={ location === "library" ? "hidden" : "" }>
            {location === "playlists" && playlistCreator !== currentUser ? renderHeart : ""}
          </div>

          <div className={location === "playlists" && currentUser === playlistCreator ? "playlist-dropdown" : "invisible"} onClick={() => this.handleDropDown()} ref={div => this.dropDown = div}>
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
  const currentUser = state.session.id;
  const { songs, likes } = state.entities;
  const { loading } = state.ui.loading;
  const likedSongsDetails = likes.songs;
  const currentUserLikes = state.entities.users[currentUser].likes;
  const likedPlaylists = currentUserLikes.playlists;

  return {
    currentUser,
    songs,
    likedSongsDetails,
    likedPlaylists,
    loading,
    likes
  };
};

const mDTP = dispatch => {
  return {
    openAlert: (type) => dispatch(openAlert(type)),
    closeAlert: () => dispatch(closeAlert()),
    editPlaylist: id => dispatch(openModal(id, 'editPlaylist')),
    deletePlaylist: id => dispatch(openModal(id, 'deletePlaylist')),
    likePlaylist: (likableId, likableType) => dispatch(like(likableId, likableType)),
    unlikePlaylist: (likableId, likableType) => dispatch(unlike(likableId, likableType)),
  }
};

export default withRouter(connect(mSTP, mDTP)(Playlist)); 
