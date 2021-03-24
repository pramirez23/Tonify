import React from 'react';


class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { playlists, artist, albums, songs, loading } = this.props;

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
      </div>
    );
  }
}
 
export default Artist;