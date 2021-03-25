import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openAlert, closeAlert } from '../../actions/alert_actions';
import { renderSongDuration, renderDateAdded } from '../../util/time_util';
import { like, unlike, unlikeSongFromLibrary } from "../../actions/library_actions";
import { addSongToPlaylist, addPlaylistSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions';
import { addAlbumSongToPlaylist } from '../../actions/album_actions';

class SongListItem extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
      isHovering: false,
      revealPlaylists: false,
      hideDropDown: true,
      mousePos: null,
      pageType: null,
      dropDownClass: null
    };
    
    this.dropDown = React.createRef();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave =  this.handleMouseLeave.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.detectPageType = this.detectPageType.bind(this);
  }

  componentDidMount() {
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];
    this._isMounted = true;

    this.setState({pageType: location});

    this.dropDownListener = e => {
      if (this.dropDown && !this.dropDown.contains(e.target)) {
        if (this._isMounted) {
          this.setState({
            hideDropDown: true,
            revealPlaylists: false
          });
        }
      }
    }

    document.addEventListener('mousedown', this.dropDownListener, false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const pathName = this.props.location.pathname.split('/');
      const location = pathName[1];
      this._isMounted = true;
      this.setState({ pageType: location });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener('mousedown', this.dropDownListener);
  }

  handleMouseEnter(e) {
    if (e.target.className === "add-to-playlist") {
      this.setState({
        revealPlaylists: true
      })
    } else if (e.target.className === "song-dropdown-option") {
      this.setState({
        revealPlaylists: false
      })
    } else {
      this.setState({
        isHovering: true
      })
    }
  }

  handleMouseLeave() {
    this.setState({
      isHovering: false
    })
  }

  handleDropDown(e) {
    this.setState({
      hideDropDown: !this.state.hideDropDown,
    })
    e.stopPropagation();
  }

  // renderLikeButton() {

  // }

  detectPageType() {
    const { song, playlists, album, currentUser } = this.props;
    let className;

    switch(this.state.pageType) {
      case "playlists":
        if (currentUser === playlists[this.props.match.params.id].user_id) {
          className = "song-dropdown-options"
        } else {
          className = "song-dropdown-other"
        }
        break;
      case "albums":
        className = "song-dropdown-other"
        break;
      case "library":
        className = "song-dropdown-other"
        break;
      default:
        return;
    }

    return className;
  }

  // dateRender(location) { 
  //   const { likedSongs, song } = this.props;
  //   if (!song) return null;

  //   if (location === "playlists") {
  //     return this.props.dateAdded;
  //   } else if (location === "library") {
  //     return renderDateAdded(likedSongs[song.id].created_at);
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    const { likedSongs, song, album, playlists, currentUser } = this.props;
    const isHovering = this.state.isHovering;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];
    
    if (this.props.loading) {
      return null;
    }

    let playlistIndex = this.props.playlists;
    let userPlaylists = Object.values(playlistIndex).filter(playlist =>
      playlist.user_id === this.props.currentUser);

    let playOrNum;
    let renderHeart;

    if (isHovering) {
      playOrNum = <i className="fas fa-play"></i>;
    } else {
      playOrNum = this.props.num;
    }

    if (!likedSongs || !likedSongs[song.id]) {
      renderHeart = (
        <i
          className={this.state.isHovering ? "far fa-heart" : "far fa-heart invisible"}
          onClick={() => 
            this.props.likeSong(song.id, "Song")
              .then(() => {
                this.props.openAlert("Like");
                setTimeout(this.props.closeAlert, 4000)
              })}>
        </i>
      )
    } else {
      renderHeart = (
        <i
          id="liked-song-heart"
          className="fas fa-heart"
          onClick={() => {
            if (location !== "library") {
              this.props.unlikeSong(song.id, "Song")
                .then(() => {
                  this.props.openAlert("Unlike");
                  setTimeout(this.props.closeAlert, 4000)
                })
            } else {
              this.props.unlikeSongFromLibrary(song.id, "Song")
                .then(() => {
                  this.props.openAlert("Unlike");
                  setTimeout(this.props.closeAlert, 4000)
                })
            }
          }}>
        </i>
      )
    }

    return (
      <tr
        className="song"
        onMouseEnter={(e) => this.handleMouseEnter(e)}
        onMouseLeave={() => this.handleMouseLeave()}>

        <td className="num-column">{playOrNum}</td>
        <td className={this.state.pageType === "playlists" || this.state.pageType === "library" ? "title-column" : "album-song-title-column"}>
          <div className="title-details">
            <div className="item-art-container">
              <img className={this.state.pageType === "playlists" || this.state.pageType === "library" ? "item-album-art" : "hidden"} src={song.cover_art} alt="Cover Art" />
            </div>
            <div className="title-artist-container">
              <p className="song-title">{song.title}</p>
              <Link to={`/artists/${song.artist_id}`}>{song.artist}</Link>
            </div>
          </div>
        </td>
        
        <td className={this.state.pageType === "playlists" || this.state.pageType === "library" ? "album-column" : "hidden"}>
          <Link to={`/albums/${song.album_id}`}>{song.album}</Link>
        </td>

        <td className={this.state.pageType === "playlists" || this.state.pageType === "library" ? "date-added-column" : "hidden"}>
          {this.props.dateAdded}
        </td>

        <td className="duration-column">
          <div className="song-controls-container">
            <div className="song-controls">
              {renderHeart}
              {renderSongDuration(song.duration)}
              <div
                className={this.state.isHovering ? "dropdown" : "invisible"}
                onClick={this.handleDropDown}
                ref={div => this.dropDown = div}
              ><i className="fas fa-ellipsis-h"></i></div>
            </div>
          </div>

          {!this.state.hideDropDown &&
            <div
              className={this.detectPageType()}
              onMouseDown={(e) => e.stopPropagation()}>

            <div
              className="add-to-queue"
              onMouseEnter={(e) => this.handleMouseEnter(e)}
              onClick={() => console.log("You clicked papi")}>Add to queue</div>

            <div
              className="song-dropdown-option"
              onMouseEnter={(e) => this.handleMouseEnter(e)}
              onClick={() => this.props.history.push(`/artists/${song.artist_id}`)}>Go to artist</div>

            <div
              className="song-dropdown-option"
              onMouseEnter={(e) => this.handleMouseEnter(e)}
              onClick={() => this.props.history.push(`/albums/${song.album_id}`)}>Go to album</div>

            <div
              className={location === "playlists" ? "song-dropdown-option" : "hidden"}
              onMouseEnter={(e) => this.handleMouseEnter(e)}
              onClick={ () => {
                this.props.removeSongFromPlaylist(this.props.playlistSongId);
                this.setState({
                  hideDropDown: true,
                  isHovering: false
                });
              }}>Remove from this playlist</div>

            <div className={(location === "playlists" && currentUser === playlists[this.props.match.params.id].user_id) ? "current-before-playlist-add" : "other-before-playlist-add"}/>

            <div
              className="add-to-playlist"
              onMouseEnter={(e) => this.handleMouseEnter(e)}>
              <span>Add to playlist</span>
              <i className="fas fa-caret-right"></i> 
            </div>

            <div className="playlist-selector-container">
              <ul className={this.state.revealPlaylists ? "playlist-selector" : "hidden"}>
                {userPlaylists.slice(0).reverse().map(playlist =>
                  <li
                    key={playlist.id}
                    className="playlist-item"
                    onClick={() => {
                      this.setState({
                        hideDropDown: true,
                        isHovering: false
                      });

                      if (location === "playlists") {
                        this.props.addPlaylistSongToPlaylist(playlist.id, song.id, this.props.match.params.id).then(() => {
                          this.props.openAlert("Playlist");
                          setTimeout(this.props.closeAlert, 4000)
                        })
                      } else if (location === "albums") {
                        this.props.addAlbumSongToPlaylist(playlist.id, song.id, album.id).then(() => {
                          this.props.openAlert("Playlist");
                          setTimeout(this.props.closeAlert, 4000)
                        })
                      } else {
                        this.props.addSongToPlaylist(playlist.id, song.id).then(() => {
                          this.props.openAlert("Playlist");
                          setTimeout(this.props.closeAlert, 4000)
                        })
                      }}}>{playlist.name}</li>
                  )}
              </ul>
            </div>
          </div>}
          
        </td>
      </tr>
    )
  }
}

const mSTP = state => {
  const currentUser = state.session.id;
  const { playlists, likes } = state.entities;
  const currentUserLikes = state.entities.users[currentUser].likes;
  const likedSongs = currentUserLikes.songs;
  const { loading } = state.ui.loading;

  return ({
    playlists,
    currentUser: currentUser,
    likedSongs,
    likes,
    loading
  });
};

const mDTP = dispatch => {
  return {
    likeSong: (likableId, likableType) => dispatch(like(likableId, likableType)),
    unlikeSong: (likableId, likableType) => dispatch(unlike(likableId, likableType)),
    unlikeSongFromLibrary: (likableId, likableType) => dispatch(unlikeSongFromLibrary(likableId, likableType)),
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId)),
    addPlaylistSongToPlaylist: (playlistId, songId, currentPlaylistId) => dispatch(addPlaylistSongToPlaylist(playlistId, songId, currentPlaylistId)),
    addAlbumSongToPlaylist: (playlistId, songId, albumId) => dispatch(addAlbumSongToPlaylist(playlistId, songId, albumId)),
    removeSongFromPlaylist: playlistSongId => dispatch(removeSongFromPlaylist(playlistSongId)),
    openAlert: (alertType) => dispatch(openAlert(alertType)),
    closeAlert: () => dispatch(closeAlert())
  }
};

export default withRouter(connect(mSTP, mDTP)(SongListItem));