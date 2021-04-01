import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { renderSongDuration } from '../../util/time_util';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      duration: 0,
      currentTime: 0,
      volume: 1,
      loop: false,
      queueIndex: 0
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
    this.setState({
      duration: this.audio.duration
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
    if (!this.audio) return;
    this.state.playing ? this.audio.pause() : this.audio.play();
    this.setState({ 
      isPlaying: !this.state.isPlaying
    });
  }

  handleVolume(e) {
    this.audio.volume = e.target.value;
    this.setState({
      volume: e.target.value
    })
  }

  handleTimeUpdate() {
    this.setState({
      currentTime: this.audio.currentTime
    });
    this.progressBar.value = this.state.currentTime;
  }

  handleProgressChange(e) {
    this.setState({
      currentTime: e.target.value
    });
    this.audio.currentTime = e.target.value;
  }

  render() { 
    let renderHeart;
    const { currentTrack } = this.props;
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
          <div className="playbar-cover-container">
            <div className="playbar-cover">Cover</div>
          </div>

          <div className="playbar-song-details-container">
            <span className="playbar-song-title">Song Title</span>
            <span className="playbar-artist-title">Artist Title</span>
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
            <span className="song-progress-time">{renderSongDuration(this.state.currentTime)}</span>
            <audio
              src=""
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