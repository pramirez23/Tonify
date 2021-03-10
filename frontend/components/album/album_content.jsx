import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import { renderTotalDuration } from '../../util/time_util';
import SongListItem from '../songs/song_list_item'

class Album extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      isLiked: false,
    }

    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.dropDownListener = e => {
      if (this.dropDown && !this.dropDown.contains(e.target)) {
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

  render() {
    const { album, songs, currentUser, playlists } = this.props;
    const albumSongs = Object.entries(songs);
    const renderAlbumDuration = renderTotalDuration(album.duration);

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
            {!this.state.hideDropDown && <div className="playlist-dropdown-options" onClick={e => e.stopPropagation()}>
              <div className="edit-playlist">Add to queue</div>
              <div className="edit-playlist">Add to Your Library</div>
              <div className="delete-playlist">Delete</div>
            </div>}
          </div>
        </div>

        <table className="song-columns">
          <thead>
            <tr className="song-column-header">
              <th className="song-column-num">#</th>
              <th className="song-column-title">TITLE</th>
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

const mDTP = dispatch => {
  return {
    editPlaylist: id => dispatch(openModal(id, 'editPlaylist')),
    deletePlaylist: id => dispatch(openModal(id, 'deletePlaylist')),
  }
};

export default withRouter(connect(null, mDTP)(Album));
