import React from 'react';
import { renderSongDuration } from '../../util/time_util';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      currentTime: 0,
      volume: 1,
      loop: 0,
      isShuffled: false
    }

    this.handleMetadata = this.handleMetadata.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.renderLoop = this.renderLoop.bind(this);
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
    // implement modulo in the future
    const {
      beginLoopFromEnd,
      fetchPrevSong,
      currentSong,
      currentSongIndex,
      currentQueue,
      shuffledQueue,
      shuffleIndex
    } = this.props;

    if (!currentSong) return;

    const prevSongIdx = currentQueue[currentSongIndex - 1]
    const prevShuffleSongIdx = shuffledQueue[shuffleIndex - 1]
    const prevShuffleSongId = currentQueue[prevShuffleSongIdx]

    switch (this.state.loop) {
      // No loop
      case 0:
        if (this.state.isShuffled) {
          if (shuffleIndex === 0) {
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          } else if (shuffleIndex < shuffledQueue.length - 1) {
            fetchPrevSong(prevShuffleSongId)
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        } else {
          if (currentSongIndex === 0) {
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          } else if (currentSongIndex <= Object.entries(currentQueue).length - 1) {
            const audio = document.getElementById("audio");
            fetchPrevSong(prevSongIdx)
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        }
        break;
      // Repeat all in queue
      case 1:
        if (this.state.isShuffled) {
          if (shuffleIndex === 0) {
            beginLoopFromEnd(currentQueue);
            fetchPrevSong(currentQueue[shuffledQueue[shuffledQueue.length - 1]]);
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          } else if (shuffleIndex <= shuffledQueue.length - 1) {
            const audio = document.getElementById("audio");
            fetchPrevSong(prevShuffleSongId)
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        } else {          
          if (currentSongIndex === 0) {
            beginLoopFromEnd(currentQueue);
            fetchPrevSong(currentQueue[Object.entries(currentQueue).length - 1]);
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          } else if (currentSongIndex <= Object.entries(currentQueue).length - 1) {
            const audio = document.getElementById("audio");
            fetchPrevSong(prevSongIdx)
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        }
      // Repeat current song
      case 2:
        const audio = document.getElementById("audio");
        this.setState({ currentTime: 0 });
        audio.currentTime = 0;
      default:
        break;
    }
  }

  handleNext() {
    // implement modulo in the future
    const {
      fetchNextSong,
      currentSong,
      currentSongIndex,
      currentQueue,
      shuffledQueue,
      shuffleIndex,
      endLoopQueue,
      endQueue
    } = this.props;

    if (!currentSong) return;

    const nextSongId = currentQueue[currentSongIndex + 1]
    const nextShuffleSongIdx = shuffledQueue[shuffleIndex + 1]
    const nextShuffleSongId = currentQueue[nextShuffleSongIdx]

    switch (this.state.loop) {
      // No loop
      case 0:
        if (this.state.isShuffled) {
          if (shuffleIndex === shuffledQueue.length - 1) {
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
            endQueue(currentQueue);
            this.setState({ isShuffled: false });
          } else if (shuffleIndex < shuffledQueue.length - 1) {
            fetchNextSong(nextShuffleSongId)
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        } else {
          if (currentSongIndex === Object.entries(currentQueue).length - 1) {
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
            endQueue(currentQueue);
            this.setState({ isShuffled: false });
          } else if (currentSongIndex < (Object.entries(currentQueue).length - 1)) {
            fetchNextSong(nextSongId)
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        }
        break;
      // Repeat all in queue
      case 1:
        if (this.state.isShuffled) {
          if (shuffleIndex === shuffledQueue.length - 1) {
            endLoopQueue();
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
            fetchNextSong(currentQueue[shuffledQueue[0]]);
          } else if (shuffleIndex < shuffledQueue.length - 1) {
            fetchNextSong(nextShuffleSongId)
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        } else {
          if (currentSongIndex === Object.entries(currentQueue).length - 1) {
            endLoopQueue();
            fetchNextSong(currentQueue[0]);
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          } else if (currentSongIndex < (Object.entries(currentQueue).length - 1)) {
            fetchNextSong(nextSongId)
            const audio = document.getElementById("audio");
            this.setState({ currentTime: 0 });
            audio.currentTime = 0;
          }
        }
        // Repeat current song
        case 2:
          const audio = document.getElementById("audio");
          this.setState({ currentTime: 0 });
          audio.currentTime = 0;
      default:
        break;
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

  handleShuffle() {
    const {
      currentQueue,
      currentSongIndex,
      shuffleQueue,
      unshuffleQueue, 
    } = this.props;
    
    if (Object.entries(currentQueue).length === 0) return;

    let shuffledQueue = [];
    let shuffledQueueObj = Object.assign({}, currentQueue);
    delete shuffledQueueObj[currentSongIndex];

    shuffledQueue.push(currentSongIndex)

    shuffledQueue = shuffledQueue.concat(
      Object.keys(shuffledQueueObj).map(Number).sort(() => Math.random() - 0.5)
    )
    
    this.setState({
      isShuffled: !this.state.isShuffled
    })

    !this.state.isShuffled ? shuffleQueue(shuffledQueue) : unshuffleQueue()
  }

  handleLoop() {
    const { loop } = this.state;
    const newLoopValue = loop + 1

    if (this.state.loop === 2) {
      this.setState({ loop: 0 });
    } else {
      this.setState({
        loop: newLoopValue
      })
    }
  }

  renderLoop() {
    switch (this.state.loop) {
      case 0:
        return (
          <span id="repeat" className="material-icons">repeat</span>
        )
      case 1:
        return (
          <span id="repeat-all" className="material-icons">repeat</span>
        )
      case 2:
        return (
          <span id="repeat-one" className="material-icons">repeat_one</span>
        )
      default:
        break;
    }
  }

  render() { 
    const {
      currentSong,
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
            <div className="playbar-artist-title-container">              
              <span 
                className={currentSong ? "playbar-artist-title" : "hidden"}
                onClick={() => this.props.history.push(`/artists/${currentSong.artist_id}`)}>{currentSong ? currentSong.artist : ""}</span>
            </div>
          </div>

          {renderHeart}
        </div>

        <div className="song-progress-controls-container">
          <div id="playbar-controls">
            <div
              className={this.state.isShuffled ? "random-button-container" : "playbar-control-button-container"}
              onClick={this.handleShuffle}>
              <i id="random" className="fas fa-random"></i>
            </div>

            <div
              className="playbar-control-button-container"
              onClick={this.handlePrev}>
              <span id="back" className="material-icons">skip_previous</span>
            </div>

            {pauseOrPlay}

            <div
              className="playbar-control-button-container"
              onClick={this.handleNext}>
              <span id="forward" className="material-icons">skip_next</span>
            </div>

            <div
              className={this.state.loop > 0 ? "loop-button-container" : "playbar-control-button-container"}
              onClick={this.handleLoop}>{this.renderLoop()}</div>
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