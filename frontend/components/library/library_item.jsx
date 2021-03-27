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
      isHovering: false
    }

    this.renderLibraryPhoto = this.renderLibraryPhoto.bind(this);
    this.renderLibraryTitle = this.renderLibraryTitle.bind(this);
    this.renderLibraryCreator = this.renderLibraryCreator.bind(this);
    this.renderPhoto = this.renderPhoto.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderCreator = this.renderCreator.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  renderLibraryPhoto() {
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
              className="library-photo" />
          </div>
        );
      case "artists":
        return (
          <div className="library-item-photo">
            <img
              src={artist.photos[0]}
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
              className="library-photo"/>
          </div>
        );
      default:
        break;
    }
  }

  renderLibraryTitle() {
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

  renderLibraryCreator() {
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
          <span className="library-item-creator">
            {album.artist}
          </span>
        );
      default:
        break;
    }
  }

  renderPhoto(itemType) {
    const { playlist, artist, album, songs } = this.props;
    
    switch (itemType) {
      case "Playlist":
        return (
          <div className="library-item-photo">
            <img
              src={ playlist.photo_url ? playlist.photo_url : window.defaultPlaylistIcon }
              alt="Playlist Icon"
              className="library-photo" />
          </div>
        );
      case "Artist":
        return (
          <div className="library-item-photo">
            <img
              src={artist.photos[0]}
              alt= "Artist Icon"
              className="library-artist-photo" />
          </div>
        );
      case "Album":
        return (
          <div className="library-item-photo">
            <img
              src={album.cover_art}
              alt= "Album Icon"
              className="library-photo"/>
          </div>
        );
      default:
        break;
    }
  }

  renderTitle(itemType) {
    const { playlist, artist, album, songs } = this.props;
    
    switch (itemType) {
      case "Playlist":
        return (
          <span className="library-item-name">
            {playlist.name}
          </span>
        );
      case "Artist":
        return (
          <span className="library-item-name">
            {artist.name}
          </span>
        );
      case "Album":
        return (
          <span className="library-item-name">
            {album.title}
          </span>
        );
      default:
        break;
    }
  }

  renderCreator(itemType) {
    const { playlist, album, songs } = this.props;

    switch (itemType) {
      case "Playlist":
        return (
          <span className="library-item-creator">
            {playlist.creator}
          </span>
        );
      case "Artist":
        return (
          <span className="library-item-creator">
            Artist
          </span>
        );
      case "Album":
        return (
          <span className="library-item-creator">
            {album.year} • Album
          </span>
        );
      default:
        break;
    }
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

  handleClick(itemType) {
    const { id, location, history } = this.props;
    const pathName = location.pathname.split('/');
    const pageLocation = pathName[1];
    const pageId = pathName[2];

    if (pageLocation === "library") {
      switch (pageId) {
        case "playlists":
          history.push(`/playlists/${id}`);
          break;
        case "artists":
          history.push(`/artists/${id}`);
          break;
        case "albums":
          history.push(`/albums/${id}`);
          break;
        default:
          break;
      }
    } else {
      switch (itemType) {
        case "Playlist":
          history.push(`/playlists/${id}`);
          break;
        case "Artist":
          history.push(`/artists/${id}`);
          break;
        case "Album":
          history.push(`/albums/${id}`);
          break;
        default:
          break;
      }
    }
  }

  render() { 
    const { itemType } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];

    return (
      <div
        className="library-item"
        onMouseEnter={(e) => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onClick={() => this.handleClick(itemType)}>
        <div className="library-item-header">
          {location === "library" ? this.renderLibraryPhoto() : this.renderPhoto(itemType)}
          <img
            className={this.state.isHovering ? "show-library-play" : "hide-library-play"}
            src={window.playButton}
            alt="Play Button"
            onClick={(e) => {
              e.stopPropagation();
              console.log("clicked")
            }}/>
        </div>
        <div className="library-item-details">
          {location === "library" ? this.renderLibraryTitle() : this.renderTitle(itemType)}
          {location === "library" ? this.renderLibraryCreator() : this.renderCreator(itemType)}
        </div>
      </div>
    )
  }
}
 
export default LibraryItem;