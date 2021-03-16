import React from 'react';
import { Link } from 'react-router-dom';
import { renderDateAdded } from '../../util/time_util';
import SongListItem from '../songs/song_list_item'

class LikedSongs extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.emptyOrFilled = this.emptyOrFilled.bind(this);
  }

  emptyOrFilled() {
    const { songs, likedSongsDetails } = this.props;
    const likedSongs = Object.entries(songs);

    if (likedSongs.length > 0) {
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
            {likedSongs.slice(0).reverse().map((song, idx) =>
              <SongListItem
                song={song[1]}
                // dateAdded={renderDateAdded(likedSongsDetails[song[1].id].created_at)}
                playlistSongId={song[0]}
                key={idx}
                num={(idx + 1)}
              />
            )}
          </tbody>
        </table>
      )
    } else {
      return (
        <div className="empty-liked-songs">
          <span id="empty-liked-icon" className="material-icons">music_note</span>
          <p className="empty-header">Songs you like will appear here</p>
          <p className="empty-details">Save songs by tapping the heart icon.</p>
          <button className="find-songs">FIND SONGS</button>
        </div>
      )
    }
  }

  render() {
    const { currentUser, songs, users } = this.props
    const likedSongs = Object.entries(songs);
    const username = users[currentUser].username;

    const likedSongsDetails = () => {
      if (likedSongs.length > 1) {
        return `• ${likedSongs.length} songs`;
      } else if (likedSongs.length === 1) {
        return `• 1 song`;
      } else {
        return ""
      }
    }

    if (!songs || this.props.loading) {
      return null;
    }

    return (
      <div className="main-content">
        <div className="liked-songs-header">
          <img className="liked-songs-photo" src={window.likedSongs} />
          <div className="liked-songs-details">
            <span>PLAYLIST</span>
            <h1 className="liked-songs-title">Liked Songs</h1>
            <div className="description-name-container">
              <div className="playlist-info">
                <p className="username">{username}</p>
                {likedSongsDetails()}
              </div>
            </div>
          </div>
        </div>

        <div className={likedSongs.length ? "show-page-controls" : "empty-playlist-controls"}>
          <img id={likedSongs.length ? "show-page-play" : "hidden"} src={window.playButton} />
        </div>

        {this.emptyOrFilled()}
      </div>
    )
  }
}

export default LikedSongs;