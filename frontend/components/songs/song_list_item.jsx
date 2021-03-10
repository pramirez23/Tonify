import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openAlert, closeAlert } from '../../actions/alert_actions'
import { renderSongDuration, renderDateAdded } from '../../util/time_util';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions';

class SongListItem extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      revealPlaylists: false,
      hideDropDown: true,
      mousePos: null,
      pageType: null,
      
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

    this.setState({pageType: location})

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
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.dateAdded = renderDateAdded(this.props.song.created_at)
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

  detectPageType() {
    switch(this.state.pageType) {
      case "playlists":

        break;
      case "albums":
        break;
      default:
        return;
    }
  }

  render() {
    const { song, playlist, album, currentUser } = this.props;
    const isHovering = this.state.isHovering;

    let playlistIndex = this.props.playlists;

    let userPlaylists = Object.values(playlistIndex).filter(playlist =>
      playlist.user_id === this.props.currentUser);

    let playOrNum;

    if (isHovering) {
      playOrNum = <i className="fas fa-play"></i>;
    } else {
      playOrNum = this.props.num;
    }

    return (
      <tr
        className="song"
        onMouseEnter={(e) => this.handleMouseEnter(e)}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <td className="num-column">{playOrNum}</td>
        <td className="title-column"> 
          <div className="title-details">
            <div className="item-art-container">
              <img className="item-album-art" src={song.cover_art} alt="Cover Art" />
            </div>
            <div className="title-artist-container">
              <p className="song-title">{song.title}</p>
              <Link to={`/artists/${song.artist_id}`}>{song.artist}</Link>
            </div>
          </div>
        </td>
        
        <td className={this.state.pageType === "playlists" ? "album-column" : "hidden"}>
          <Link to={`/albums/${song.album_id}`}>{song.album}</Link>
        </td>

        <td className={this.state.pageType === "playlists" ? "date-added-column" : "hidden"}>
          {this.props.dateAdded}
        </td>

        <td className="duration-column">
          <div className="song-controls-container">
            <div className="song-controls">
              <i className={this.state.isHovering ? "far fa-heart" : "hidden"}></i>
              {renderSongDuration(song.duration)}
              <div
                className={this.state.isHovering ? "dropdown" : "hidden"}
                onClick={this.handleDropDown}
                ref={div => this.dropDown = div}
              ><i className="fas fa-ellipsis-h"></i></div>
            </div>
          </div>

          {!this.state.hideDropDown && <div className={(currentUser === playlist.user_id) ? "song-dropdown-options": "song-dropdown-other"} onMouseDown={(e) => e.stopPropagation()}>
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
              className={currentUser === playlist.user_id ? "song-dropdown-option" : "hidden"}
              onMouseEnter={(e) => this.handleMouseEnter(e)}
              onClick={ () => {
                this.props.removeSongFromPlaylist(this.props.playlistSongId);
                this.setState({
                  hideDropDown: true,
                  isHovering: false
                });
              }}>Remove from this playlist</div>

            <div className={ (currentUser === playlist.user_id) ? "current-before-playlist-add" : "other-before-playlist-add"}/>

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

                      this.props.addSongToPlaylist(playlist.id, song.id, this.props.match.params.id)
                        .then(() => {
                          this.props.openAlert();
                          setTimeout(this.props.closeAlert, 4000);
                        })}}>{playlist.name}
                    </li>
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
  const { playlists } = state.entities;

  return ({
    playlists,
    currentUser: currentUser,
  });
};

const mDTP = dispatch => {
  return {
    addSongToPlaylist: (playlistId, songId, currentPlaylistId) => dispatch(addSongToPlaylist(playlistId, songId, currentPlaylistId)),
    removeSongFromPlaylist: playlistSongId => dispatch(removeSongFromPlaylist(playlistSongId)),
    openAlert: () => dispatch(openAlert()),
    closeAlert: () => dispatch(closeAlert())
  }
};

export default withRouter(connect(mSTP, mDTP)(SongListItem));