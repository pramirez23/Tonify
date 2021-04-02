import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { renderSongDuration } from '../../util/time_util';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      currentTime: 0,
      volume: 1,
      loop: false,
    }

    this.handleMetadata = this.handleMetadata.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);

    this.audio = document.getElementById("audio");
    this.progressBar = document.getElementById("progress-bar");
  }
  
  componentDidMount() {
    document.body.addEventListener("keydown", (e) => {
      if (e.code === "Space" && e.target == document.body) {
        e.preventDefault();
    }});
  }

  handleMetadata() {
    const audio = document.getElementById("audio")
    this.setState({
      duration: audio.duration
    });
  }

  handlePrev() {
    const {
      fetchPrevSong,
      currentSong,
      currentSongIndex,
      currentQueue,
      endQueue
    } = this.props;

    if (!currentSong) return;

    if (currentSongIndex === 0) {
      const audio = document.getElementById("audio");
      this.setState({ currentTime: 0 });
      audio.currentTime = 0;
    } else if (0 < currentSongIndex < (currentQueue.length - 1)) {
      const audio = document.getElementById("audio");
      fetchPrevSong(currentQueue[currentSongIndex - 1])
      this.setState({ currentTime: 0 });
      audio.currentTime = 0;
    }
  }

  handleNext() {
    const {
      fetchNextSong,
      currentSong,
      currentSongIndex,
      currentQueue,
      endQueue
    } = this.props;

    if (!currentSong) return;

    if (currentSongIndex === currentQueue.length - 1) {
      const audio = document.getElementById("audio");
      this.setState({ currentTime: 0 });
      audio.currentTime = 0;
      endQueue();
    } else if (currentSongIndex < (currentQueue.length - 1)) {
      fetchNextSong(currentQueue[currentSongIndex + 1])
      const audio = document.getElementById("audio");
      this.setState({ currentTime: 0 });
      audio.currentTime = 0;
    }
  }

  handlePlay() {
    const {
      isPlaying,
      pauseSong,
      playSong,
      currentSong,
      currentSongIndex,
      currentQueue,
      currentQueueLocation
    } = this.props;

    const audio = document.getElementById("audio");
    // const location = this.props.location.pathname;

    if (!currentSong) return; 

    if (isPlaying) {
      audio.pause();
      pauseSong();
    } else {
      audio.play();
      playSong(currentSong, currentSongIndex, currentQueue, currentQueueLocation);
    }

  }

  handleVolume(e) {
    const audio = document.getElementById("audio")
    audio.volume = e.target.value;
    this.setState({
      volume: e.target.value
    })
  }

  handleTimeUpdate() {
    const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progress-bar")
    this.setState({
      currentTime: audio.currentTime
    });
    progressBar.value = this.state.currentTime;
  }

  handleProgressChange(e) {
    document.getElementById("audio")
    this.setState({
      currentTime: e.target.value
    });
    audio.currentTime = e.target.value;
  }

  render() { 
    const {
      currentSong,
      currentSongIndex,
      currentQueue,
      likedSongs,
      likeSong,
      isPlaying,
      unlikeSong,
      unlikeSongFromLibrary,
      openAlert,
      closeAlert
    } = this.props;

    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    let renderHeart;
    let pauseOrPlay;

    if (currentSong) {
      if (!likedSongs || !likedSongs[currentSong.id]) {
        renderHeart = (
          <i
            id="playbar-like-button"
            className="far fa-heart"
            onClick={() =>
              likeSong(currentSong.id, "Song")
                .then(() => {
                  openAlert("Like");
                  setTimeout(closeAlert, 4000)
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
                unlikeSong(currentSong.id, "Song")
                  .then(() => {
                    openAlert("Unlike");
                    setTimeout(closeAlert, 4000)
                  })
              } else {
                unlikeSongFromLibrary(currentSong.id, "Song")
                  .then(() => {
                    openAlert("Unlike");
                    setTimeout(closeAlert, 4000)
                  })
              }
            }}>
          </i>
        )
      }
    }

    if (!isPlaying) {
      pauseOrPlay = <i id="play" className="fas fa-play-circle" onClick={this.handlePlay}></i>
    } else {
      pauseOrPlay = <i id="pause" className="fas fa-pause-circle" onClick={this.handlePlay}></i>
    }
    
    return (
      <div className="playbar-container">

        <div className="playbar-song-info-container">
          <div className={currentSong ? "playbar-cover-art-container" : "hidden"}>
            <img 
              className="playbar-cover-art"
              draggable="false"
              src={currentSong? currentSong.cover_art : ""}
              alt="Playbar Art"/>
          </div>

          <div className="playbar-song-details-container">
            <span
              className={currentSong ? "playbar-song-title" : "hidden"}
              onClick={() => this.props.history.push(`/albums/${currentSong.album_id}`)}>{currentSong ? currentSong.title : ""}</span>
            <span 
              className={currentSong ? "playbar-artist-title" : "hidden"}
              onClick={() => this.props.history.push(`/artists/${currentSong.artist_id}`)}>{currentSong ? currentSong.artist : ""}</span>
          </div>

          {renderHeart}
        </div>

        <div className="song-progress-controls-container">
          <div id="playbar-controls">
            <i
              id="random"
              className="fas fa-random"></i>
            <i
              id="back"
              className="fas fa-step-backward"
              onClick={this.handlePrev}></i>

            {pauseOrPlay}

            <i
              id="forward"
              className="fas fa-step-forward"
              onClick={this.handleNext}></i>
            <i
              id="repeat"
              className="fas fa-redo"></i>
          </div>

          <div className="song-progress-bar-container">
            <span id="song-progress-current" className="song-progress-time">{renderSongDuration(this.state.currentTime)}</span>
            <audio
              src={currentSong ? currentSong.audio_file : ""}
              id="audio"
              autoPlay
              onTimeUpdate={this.handleTimeUpdate}
              onLoadedMetadata={this.handleMetadata}
              onEnded={this.handleNext}></audio>
            <input
              id="progress-bar"
              className="progress-bar"
              type="range"
              min="0"
              max={this.state.duration}
              onChange={this.handleProgressChange}/>
            <span className="song-progress-time">{renderSongDuration(this.state.duration)}</span>
          </div>
        </div>

        <div className="volume-container">
          <i className="fas fa-volume-up"></i>
          <input
            id="volume-bar"
            onChange={this.handleVolume}
            className="volume-bar"
            type="range"
            min="0"
            step="0.02"
            max="1"/>
        </div>
      </div>
    );
  }
}
 
export default Playbar;