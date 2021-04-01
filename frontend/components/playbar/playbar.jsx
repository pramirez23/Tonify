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
    if (this.state.queueIndex >= 1 && this.state.queueIndex) {
      this.props.fetchNextTrack(this.props.playbar.queue[this.state.queueIndex - 1])
      this.setState({ i: this.state.queueIndex - 1 })
    } else {
      alert('this is the first song in the queue')
    }
  }

  handleNext() {
    if (this.state.queueIndex <= this.props.playbar.queue.length - 1) {
      if (this.state.queueIndex === 0) {
        this.setState({ i: 1 })
        this.props.fetchNextTrack(this.props.playbar.queue[this.state.queueIndex])
      } else {
        this.props.fetchNextTrack(this.props.playbar.queue[this.state.queueIndex])
        this.setState({ i: this.state.queueIndex + 1 })
      }
    } else {
      alert('no more songs in queue')
    }
  }

  handlePlay() {
    const { isPlaying, pauseSong, playSong, currentSong, currentSongIndex, currentQueue } = this.props;
    const audio = document.getElementById("audio");
    if (isPlaying) {
      audio.pause();
      pauseSong();
    } else {
      audio.play();
      playSong(currentSong, currentSongIndex, currentQueue);
    }

    // this.setState({ 
    //   isPlaying: !this.state.isPlaying
    // });
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
    let renderHeart;
    const { currentSong, currentSongIndex, currentQueue } = this.props;
    // if (!likedSongs || !likedSongs[song.id]) {
    //   renderHeart = (
    //     <i
    //       className="far fa-heart"
    //       onClick={() =>
    //         this.props.likeSong(song.id, "Song")
    //           .then(() => {
    //             this.props.openAlert("Like");
    //             setTimeout(this.props.closeAlert, 4000)
    //           })}>
    //     </i>
    //   )
    // } else {
    //   renderHeart = (
    //     <i
    //       id="liked-song-heart"
    //       className="fas fa-heart"
    //       onClick={() => {
    //         if (location !== "library") {
    //           this.props.unlikeSong(song.id, "Song")
    //             .then(() => {
    //               this.props.openAlert("Unlike");
    //               setTimeout(this.props.closeAlert, 4000)
    //             })
    //         } else {
    //           this.props.unlikeSongFromLibrary(song.id, "Song")
    //             .then(() => {
    //               this.props.openAlert("Unlike");
    //               setTimeout(this.props.closeAlert, 4000)
    //             })
    //         }
    //       }}>
    //     </i>
    //   )
    // }
    
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
            <span className={currentSong ? "playbar-song-title" : "hidden"}>{currentSong ? currentSong.title : ""}</span>
            <span className={currentSong ? "playbar-artist-title" : "hidden"}>{currentSong ? currentSong.artist : ""}</span>
          </div>

          <i className="far fa-heart"></i>
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
            <i
              id="play"
              className="fas fa-play-circle"
              onClick={this.handlePlay}></i>
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