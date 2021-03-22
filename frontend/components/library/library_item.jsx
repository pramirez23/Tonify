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
  }

  componentDidMount() {
    const { playlist, artist, album, songs } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    switch (location) {
      case "playlists":
        this.setState({ playlist });
        break;
      case "artists":
        this.setState({ artist });
        break;
      case "albums":
        this.setState({ album });
        break;
      default:
        break;
    }
  }

  renderPhoto() {
    const { playlist, artist, album, songs } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    switch (location) {
      case "playlists":
        return (
          <img src={playlist.photo_url} alt="Playlist Icon" />
        );
        break;
      case "artists":
        return (
          <img src={artist.photo} alt= "Artist Icon" />
        );
        break;
      case "albums":
        return (
          <img src={album.cover_art} alt= "Album Icon" />
        );
        break;
      default:
        break;
    }
  }

  // renderTitle() {

  // }

  // renderCreator() {

  // }
  
  render() { 
    return (
      <div className="library-item">
        <header>{this.renderPhoto()}</header>
        <span>{this.renderTitle()}</span>
        <span>{this.renderCreator()}</span>
      </div>
    )
  }
}
 
export default LibraryItem;