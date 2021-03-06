import React from 'react';
import LibraryItemContainer from './library_item_container';
import SongsPreview from './songs_preview';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
      isHovering: false,
      playHovering: false
    }

    this.handleCreate = this.handleCreate.bind(this);
    this.renderEmptyPlaylists = this.renderEmptyPlaylists.bind(this);
    this.renderEmptyArtists = this.renderEmptyArtists.bind(this);
    this.renderEmptyAlbums = this.renderEmptyAlbums.bind(this);
    this.emptyOrFilled = this.emptyOrFilled.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handlePlayHover = this.handlePlayHover.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.emptyOrFilled();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.emptyOrFilled();
    }
  }
  
  handleCreate(e) {
    e.preventDefault();
    const userPlaylists = Object.values(this.props.playlists)
    const newPlaylist = {
      user_id: this.props.currentUser,
      name: `My Playlist #${userPlaylists.length + 1}`,
      private: false
    }
    this.props.createPlaylist(newPlaylist)
      .then(() => this.props.history.push(`/playlists/${this.props.lastPlaylist}`));
  };

  handleMouseEnter() {
    this.setState({
      isHovering: true
    })
  }

  handleMouseLeave() {
    this.setState({
      isHovering: false
    })
  }

  handlePlayHover() {
    this.setState({
      playHovering: !this.state.playHovering
    })
  }

  renderEmptyPlaylists() {
    return (
      <div className="empty-library">
        <i className="fas fa-music"></i>
        <p className="empty-library-title">Create your first playlist</p>
        <p className="empty-library-text">It's easy, we'll help you.</p>
        <button className="liked-create-playlist" onClick={this.handleCreate}>CREATE PLAYLIST</button>
      </div>
    )
  }

  renderEmptyArtists() {
    return (
      <div className="empty-library">
        <span id="library-icon" className="material-icons">person_search</span>
        <p className="empty-library-title">Follow your first artist</p>
        <p className="empty-library-text">Follow artists you like by tapping the follow button.</p>
        <button className="find-artists" onClick={() => this.props.history.push('/search')}>FIND ARTISTS</button>
      </div>
    )
  }

  renderEmptyAlbums() {
    return (
      <div className="empty-library">
        <span id="library-icon" className="material-icons">album</span>
        <p className="empty-library-title">Follow your first album</p>
        <p className="empty-library-text">Save albums by tapping the heart icon.</p>
        <button className="find-albums" onClick={() => this.props.history.push('/search')}>FIND ALBUMS</button>
      </div>
    )
  }

  renderIndex(location) {
    const { playlists, artists, albums, songs } = this.props;
    const likedSongsCount = Object.values(songs).length;

    switch (location) {
      case "playlists":
        return (
          <>
            <h1 className="library-title">Playlists</h1>
            <div className="library-index">
              <div
                className="liked-songs-shortcut"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
                onClick={() => this.props.history.push('/library/songs')}>
                <div className="liked-songs-container">
                  <SongsPreview songs={Object.values(songs)}/>
                </div>
                <div className="song-preview-details">
                  <h1 className="song-preview-title">Liked Songs</h1>
                  <span className="song-preview-count">{likedSongsCount} {likedSongsCount === 1 ? "song" : "songs"}</span>
                </div>
                {this.renderPlayPause()}
              </div>
              {Object.values(playlists).slice(0).reverse().map(((playlist, idx) =>
                <LibraryItemContainer
                  id={playlist.id}
                  playlist={playlist}
                  itemLocation={playlist.itemLocation}
                  itemType="Playlist"
                  key={idx}/>
              ))}
            </div>
          </>
        )
      case "artists":
        return (
          <>
            <h1 className="library-title">Artists</h1>
            <div className="library-index">
              {Object.values(artists).map(((artist, idx) =>
                <LibraryItemContainer
                  id={artist.id}
                  artist={artist}
                  itemLocation={artist.itemLocation}
                  itemType="Artist"
                  key={idx} />
              ))}
            </div>
          </>
        )
      case "albums":
        return (
          <>
            <h1 className="library-title">Albums</h1>
            <div className="library-index">
              {Object.values(albums).map(((album, idx) =>
                <LibraryItemContainer
                  id={album.id}
                  album={album}
                  itemLocation={album.itemLocation}
                  itemType="Album"
                  key={idx} />
              ))}
            </div>
          </>
        )
      default:
        break;
    }
  }

  emptyOrFilled() {
    const { playlists, artists, albums, songs } = this.props; 
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[2];

    switch (location) {
      case "playlists":
        return Object.entries(playlists).length === 0 ? this.renderEmptyPlaylists() : this.renderIndex(location)
      case "artists":
        return Object.entries(artists).length === 0 ? this.renderEmptyArtists() : this.renderIndex(location)
      case "albums":
        return Object.entries(albums).length === 0 ? this.renderEmptyAlbums() : this.renderIndex(location)
      default:
        break;
    }
  }

  handlePlay() {
    const {
      id,
      isPlaying,
      currentSong,
      currentSongIndex,
      currentQueueLocation,
      pageQueue,
      fetchLibraryItem,
      playSong,
      pauseSong,
    } = this.props;

    const itemLocation = "/library/songs"
    const itemType = "Liked Songs"

    if (!isPlaying) {
      if (currentQueueLocation !== itemLocation) {
        fetchLibraryItem(id, itemType, itemLocation);
      } else {
        playSong(currentSong, currentSongIndex, pageQueue, itemLocation);
        const audio = document.getElementById("audio");
        audio.play();
      }
    } else if (currentQueueLocation !== itemLocation) {
      fetchLibraryItem(id, itemType, itemLocation);
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
    } = this.props;

    const itemLocation = "/library/songs"

    const playButton = (
      <img
        id={this.state.playHovering ? "liked-songs-hover" : ""}
        className={this.state.isHovering ? "show-song-preview-play" : "hide-song-preview-play"}
        src={window.playButton}
        alt="Play Button"
        onMouseEnter={this.handlePlayHover}
        onMouseLeave={this.handlePlayHover}
        onClick={(e) => {
          e.stopPropagation();
          this.handlePlay();
        }} />
    )

    const pauseButton = (
      <img
        id={this.state.playHovering ? "liked-songs-hover" : ""}
        className={this.state.isHovering ? "show-song-preview-play" : "hide-song-preview-play"}
        src={window.pauseButton}
        alt="Play Button"
        onMouseEnter={this.handlePlayHover}
        onMouseLeave={this.handlePlayHover}
        onClick={(e) => {
          e.stopPropagation();
          this.handlePlay();
        }} />
    )

    if (isPlaying) {
      if (currentQueueLocation === itemLocation) {
        return pauseButton;
      } else {
        return playButton;
      }
    } else {
      return playButton;
    }
  }

  render() { 
    return (
      <div className="library-container">
        {this.emptyOrFilled()}
      </div>
    );
  }
}
 
export default Library;