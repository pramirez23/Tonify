import React from 'react';
import { Link } from 'react-router-dom'; 

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isHovering: false
    };
    
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  render() {
    const song = this.props.song;
    const isHovering = this.state.isHovering;

    let playOrNum;

    if (isHovering) {
      playOrNum = <i className="fas fa-play"></i>;
    } else {
      playOrNum = this.props.num;
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
              <p>"this is the artist's name"</p>
            </div>
          </div>
        </td>
        <td className="album-column">Album title placeholder</td>
        <td className="date-added-column">Date added here</td>
        <td className="duration-column">{song.duration}</td>
      </tr>
    )
  }
}

export default SongListItem;