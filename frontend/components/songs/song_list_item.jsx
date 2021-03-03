import React from 'react';
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router';
import { renderSongDuration, renderDateAdded } from '../../util/time_util'

class SongListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      hideDropDown: true,
      mousePos: null
    };
    
    this.dateAdded = renderDateAdded(this.props.song.created_at)
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave =  this.handleMouseLeave.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.dropDownListener = e => {
      if (this.dropDown && !this.dropDown.contains(e.target)) this.setState({
        hideDropDown: true
      });
    }

    document.addEventListener('mousedown', this.dropDownListener);
    document.addEventListener('contextmenu', this.dropDownListener);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.dropDownListener);
    document.removeEventListener('contextmenu', this.dropDownListener);
  }

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

  handleDropDown(e) {
    e.preventDefault();
    const mousePos = {
      x: e.pageX - 200,
      y: e.pageY
    }
    this.setState({
      hideDropDown: !this.state.hideDropDown,
      mousePos
    })
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
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onContextMenu={(e) => this.handleDropDown(e)}
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
        <td className="album-column"><Link to={`/albums/${song.album_id}`}>{song.album}</Link></td>
        <td className="date-added-column">
          {this.dateAdded}
        </td>
        <td className="duration-column">
          <div className="song-controls-container">
            <div className="song-controls">
              <i className={this.state.isHovering ? "far fa-heart" : "hidden"}></i>
              {renderSongDuration(song.duration)}
              <div
                className={this.state.isHovering ? "dropdown" : "hidden"}
                onMouseDown={(e) => this.handleDropDown(e)}
                onContextMenu={(e) => this.handleDropDown(e)}
                ref={div => this.dropDown = div}
              ><i className="fas fa-ellipsis-h"></i></div>
            </div>
          </div>
          {!this.state.hideDropDown && <div className="song-dropdown-options">
            <div onClick={()=> console.log("You clicked papi")}>Add to queue</div>
            <div onClick={()=> console.log("You clicked papi")}>Go to artist</div>
            <div onClick={()=> console.log("You clicked papi")}>Go to album</div>
            <div onClick={()=> console.log("You clicked papi")}>Remove from this playlist</div>
            <div onClick={()=> console.log("You clicked papi")}>Add to playlist</div>
          </div>}
        </td>
      </tr>
    )
  }
}

export default withRouter(SongListItem);