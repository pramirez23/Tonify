import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { renderTotalDuration } from '../../util/time_util';
import { addAlbumToPlaylist } from '../../actions/album_actions';
import { openAlert, closeAlert } from '../../actions/alert_actions';
import SongListItem from '../songs/song_list_item'

class Album extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      isLiked: false,
      revealPlaylists: false
    }

    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
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

  handleMouseEnter(e) {
    if (e.target.className === "add-to-playlist") {
      this.setState({
        revealPlaylists: true
      })
    } else if (e.target.className === "album-dropdown-option") {
      this.setState({
        revealPlaylists: false
      })
    }
  }

  render() {
    const { album, songs, currentUser, playlists } = this.props;
    const albumSongs = Object.entries(songs);
    const renderAlbumDuration = renderTotalDuration(album.duration);

    let userPlaylists = Object.values(playlists).filter(playlist =>
      playlist.user_id === this.props.currentUser);

    const albumDetails = () => {
      if (albumSongs.length > 1) {
        return ` • ${album.year} • ${albumSongs.length} songs, ${renderAlbumDuration}`;
      } else if (albumSongs.length === 1) {
        return ` • ${album.year} • 1 song, ${renderAlbumDuration}`;
      }
    }

    if (!album || !songs) {
      return null;
    }

    return (
      <div className="main-content">
        <div className="album-header">
          <img className="album-photo" src={album.cover_art} />
          <div className="album-details-container">
            <span>{album.single ? "SINGLE" : "ALBUM"}</span>
            <h1 className="album-name">{album.title}</h1>

            <div className="album-details">
              <Link className="artist-link" to={`/artists/${album.artist_id}`}>{album.artist}</Link>
              <div className="album-year-duration">{albumDetails()}</div>
            </div>
          </div>
        </div>

        <div className={albumSongs.length ? "show-page-controls" : "empty-playlist-controls"}>
          <img id={albumSongs.length ? "show-page-play" : "hidden"} src={window.playButton} />

          <div>
            <i className="far fa-heart"></i>
          </div>

          <div className="dropdown" onClick={() => this.handleDropDown()} ref={div => this.dropDown = div}>
            <i className="fas fa-ellipsis-h"></i>
            {!this.state.hideDropDown && <div className="album-dropdown-options" onClick={e => e.stopPropagation()}>
              <div
                className="album-dropdown-option"
                onMouseEnter={(e) => this.handleMouseEnter(e)}>Add to queue</div>

              <div
                className="album-dropdown-option"
                onMouseEnter={(e) => this.handleMouseEnter(e)}>Add to Your Library</div>

              <div
                className="add-to-playlist"
                onMouseEnter={(e) => this.handleMouseEnter(e)}>
                <span>Add to playlist</span>
                <i className="fas fa-caret-right"></i>
              </div>

              <div className="album-playlist-selector-container">
                <ul className={this.state.revealPlaylists ? "album-playlist-selector" : "hidden"}>
                  {userPlaylists.slice(0).reverse().map(playlist =>
                    <li
                      key={playlist.id}
                      className="playlist-item"
                      onClick={() => {
                        this.setState({
                          hideDropDown: true,
                          isHovering: false
                        });
                        
                        
                        this.props.addAlbumToPlaylist(playlist.id, album.id)
                          .then(() => {
                            this.props.openAlert("Playlist");
                            setTimeout(this.props.closeAlert, 4000);
                           })
                      }}>{playlist.name}
                    </li>
                  )}
                </ul>
              </div>

            </div>}
          </div>
        </div>

        <table className="song-columns">
          <thead>
            <tr className="song-column-header">
              <th className="song-column-num">#</th>
              <th className="album-song-column-title">TITLE</th>
              <th className="song-column-duration"><i className="far fa-clock"></i></th>
            </tr>
          </thead>

          <tbody>
            <tr className="null-row"><td className="null-td"></td></tr>
            {albumSongs.slice(0).map((song, idx) =>
              <SongListItem
                song={song[1]}
                key={idx}
                num={(idx + 1)}
                currentUser={currentUser}
                album={album}
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mSTP = state => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;

  return ({
    playlists,
    currentUser: currentUser,
  });
};

const mDTP = dispatch => {
  return {
    openAlert: (type) => dispatch(openAlert(type)),
    closeAlert: () => dispatch(closeAlert()),
    addAlbumToPlaylist: (playlistId, albumId) => dispatch(addAlbumToPlaylist(playlistId, albumId))
  }
};

export default withRouter(connect(mSTP, mDTP)(Album));
