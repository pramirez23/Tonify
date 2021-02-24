import React from 'react';
import { Link } from 'react-router-dom'; 

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isHovering: false
    };
    
    this.handleHover = this.handleHover.bind(this);
    this.renderTime = this.renderTime.bind(this);
  }

  handleHover() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }
  
  renderTime(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    return `${minutes}:${seconds}`
  }

  render() {
    const song = this.props.song;
    const isHovering = this.state.isHovering;
    const renderTime = this.renderTime;
    let playOrNum;
    let songControls;

    if (isHovering) {
      playOrNum = <i className="fas fa-play"></i>;
      songControls = (
        <div className="song-controls">
          <i class="far fa-heart"></i>
          {renderTime(song.duration)}
          <i className="fas fa-ellipsis-h"></i>
        </div>
      )
    } else {
      playOrNum = this.props.num;
      songControls = this.renderTime(song.duration)
    }

    return (
      <tr
        className="song"
        onMouseEnter={() => this.handleHover()}
        onMouseLeave={() => this.handleHover()}
      >
        <td className="num-column">{playOrNum}</td>
        <td className="title-column"> 
          <div className="title-details">
            <div className="item-art-container">
              <img className="item-album-art" src={song.cover_art} alt="cover art" />
            </div>
            <div className="title-artist-container">
              <p className="song-title">{song.title}</p>
              <Link to={`/artists/${song.artist_id}`}>{song.artist}</Link>
            </div>
          </div>
        </td>
        <td className="album-column"><Link to={`/albums/${song.album_id}`}>{song.album}</Link></td>
        <td className="date-added-column">{song.created_at}</td>
        <td className="duration-column">
          <div className="song-controls-container">
            {songControls}
          </div>
        </td>
      </tr>
    )
  }
}

export default SongListItem;