import React from 'react';

class LibraryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      location: null,
      playlist: null,
      artist: null,
      album: null,
    }

    this.renderPhoto = this.renderPhoto.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderCreator = this.renderCreator.bind(this);
  }

  // componentDidMount() {
  //   const { playlist, artist, album, songs } = this.props;
  //   const pathName = this.props.location.pathname.split('/');
  //   const location = pathName[1];

  //   switch (location) {
  //     case "playlists":
  //       this.setState({ playlist });
  //       break;
  //     case "artists":
  //       this.setState({ artist });
  //       break;
  //     case "albums":
  //       this.setState({ album });
  //       break;
  //     default:
  //       break;
  //   }
  // }

  renderPhoto() {
    const { playlist, artist, album, songs } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[2];

    switch (location) {
      case "playlists":
        return (
          <div className="library-item-photo">
            <img
              src={ playlist.photo_url ? playlist.photo_url : window.defaultPlaylistIcon }
              alt="Playlist Icon"
              className="library-playlist-photo" />
          </div>
        );
      case "artists":
        return (
          <div className="library-item-photo">
            <img
              src={artist.photo}
              alt= "Artist Icon"
              className="library-artist-photo" />
          </div>
        );
      case "albums":
        return (
          <div className="library-item-photo">
            <img
              src={album.cover_art}
              alt= "Album Icon"
              className="library-album-photo"/>
          </div>
        );
      default:
        break;
    }
  }

  renderTitle() {
    const { playlist, artist, album, songs } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[2];

    switch (location) {
      case "playlists":
        return (
          <span className="library-item-name">
            {playlist.name}
          </span>
        );
      case "artists":
        return (
          <span className="library-item-name">
            {artist.name}
          </span>
        );
      case "albums":
        return (
          <span className="library-item-name">
            {album.title}
          </span>
        );
      default:
        break;
    }
  }

  renderCreator() {
    const { playlist, album, songs } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[2];

    switch (location) {
      case "playlists":
        return (
          <span className="library-item-creator">
            {playlist.creator}
          </span>
        );
      case "artists":
        return (
          <span className="library-item-creator">
            Artist
          </span>
        );
      case "albums":
        return (
          <span>
            {album.artist}
          </span>
        );
      default:
        break;
    }
  }
  
  render() { 
    return (
      <div className="library-item">
        {this.renderPhoto()}
        <div className="library-item-details">
          {this.renderTitle()}
          {this.renderCreator()}
        </div>
      </div>
    )
  }
}
 
export default LibraryItem;