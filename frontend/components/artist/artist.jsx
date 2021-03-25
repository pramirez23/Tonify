import React from 'react';


class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { likedArtists, artist, likeArtist, unlikeArtist, openAlert, closeAlert } = this.props;

    if (!likedArtists[artist.id]) {
      likeArtist(artist.id, "Artist")
        .then(() => {
          openAlert("Library Add");
          setTimeout(this.props.closeAlert, 4000)
        })
    } else {
      unlikeArtist(artist.id, "Artist")
        .then(() => {
          openAlert("Library Remove");
          setTimeout(this.props.closeAlert, 4000)
        })
    }
  }

  render() { 
    const { likedArtists, playlists, artist, albums, songs, loading } = this.props;

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
          <img id="show-page-play" src={window.playButton} />
          <button
            className={likedArtists[artist.id] ? "artist-following" : "artist-follow"}
            onClick={() => this.handleClick()}>
              {likedArtists[artist.id] ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>
      </div>
    );
  }
}
 
export default Artist;