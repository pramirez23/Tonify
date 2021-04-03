import React from 'react';
import SongListItem from '../songs/song_list_item'
import LibraryItemContainer from '../library/library_item_container';

class Artist extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleClick() {
    const {
      likedArtists,
      artist,
      likeArtist,
      unlikeArtist,
      openAlert,
      closeAlert
    } = this.props;

    if (!likedArtists[artist.id]) {
      likeArtist(artist.id, "Artist")
        .then(() => {
          openAlert("Library Add");
          setTimeout(closeAlert, 4000)
        })
    } else {
      unlikeArtist(artist.id, "Artist")
        .then(() => {
          openAlert("Library Remove");
          setTimeout(closeAlert, 4000)
        })
    }
  }

  handlePlay() {
    const {
      isPlaying,
      currentSong,
      currentSongIndex,
      location,
      pageQueue,
      fetchPage,
      playSong,
      pauseSong,
    } = this.props;

    if (!isPlaying) {
      if (currentSong === null) {
        fetchPage(pageQueue, location.pathname);
      } else {
        playSong(currentSong, currentSongIndex, pageQueue, location.pathname);
        const audio = document.getElementById("audio");
        audio.play();
      }
    } else {
      pauseSong();
      const audio = document.getElementById("audio");
      audio.pause();
    }
  }

  renderPlayPause() {
    const {
      isPlaying,
      currentQueueLocation,
      location,
    } = this.props;

    const playButton = (
      <img
        id="show-page-play"
        src={window.playButton}
        onClick={this.handlePlay} />
    )

    const pauseButton = (
      <img
        id="show-page-play"
        src={window.pauseButton}
        onClick={this.handlePlay} />
    )

    if (currentQueueLocation === location.pathname) {
      if (isPlaying) {
        return pauseButton;
      } else {
        return playButton;
      }
    } else {
      return playButton;
    }
  }

  render() { 
    const {
      currentUser,
      likedArtists,
      playlists,
      artist,
      albums,
      songs,
      loading
    } = this.props;

    if (loading || !playlists || !artist || !albums || !songs) return null;

    const artistPlaylistIds = artist.playlist_ids;

    return (
      <div className="main-content">
        <div className="artist-header">
          <div className="artist-details">
            <div className="verified-artist">
              <img className="verified-check" src="https://img.icons8.com/color/48/000000/instagram-verification-badge.png" />
              <span className="verified-text">Verified Artist</span>
            </div>
            <h1 className="artist-name">{artist.name}</h1>
          </div>
          <img className="artist-banner" src={artist.photos[1]} alt="Artist Profile Photo"/>
        </div>

        <div className="artist-show-controls">
          {this.renderPlayPause()}
          <button
            className={likedArtists[artist.id] ? "artist-following" : "artist-follow"}
            onClick={() => this.handleClick()}>
              {likedArtists[artist.id] ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>

        <div className="artist-songs-container">
          <h2 className="artist-songs-title">Songs</h2>
          <table className="song-columns">
            <tbody>
              {Object.values(songs).slice(0).map((song, idx) =>
                <SongListItem
                  song={song}
                  key={idx}
                  num={(idx + 1)}
                  pageIdx={idx}
                  currentUser={currentUser}
                />)}
            </tbody>
          </table>
        </div>

        <div className="artist-discography">
          <h2 className="artist-title">Discography</h2>
          <div className="library-index">
            {Object.values(albums).map(((album, idx) =>
              <LibraryItemContainer
                id={album.id}
                album={album}
                key={idx}
                itemType="Album" />
            ))}
          </div>
        </div>

        <div className={artistPlaylistIds.length > 0 ? "artist-playlists" : "hidden"}>
          <h2 className="artist-title">Playlists featuring {artist.name}</h2>
          <div className="library-index">
            {Object.values(playlists).filter(playlist => artistPlaylistIds.includes(playlist.id)).map(((playlist, idx) =>
              <LibraryItemContainer
                id={playlist.id}
                playlist={playlist}
                key={idx}
                itemType="Playlist" />
            ))}
          </div>
        </div>

        <div className="artist-bio-button-container">
          <h2 className="artist-title">About</h2>
          <button className="artist-bio-button" onClick={() => this.props.openBio(artist.id)}>
            <div className="artist-bio-image-container">
              <img className="artist-bio-pic-preview"src={artist.photos[2]} alt="Artist Bio Preview"/>
            </div>
            <div className="artist-bio-preview-container">
              <span className="artist-bio-text">{artist.bio}</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
 
export default Artist;