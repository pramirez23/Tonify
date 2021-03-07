import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreate = this.handleCreate.bind(this)
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  handleCreate(e) {
    e.preventDefault();
    const userPlaylists = Object.values(this.props.playlists)
    const newPlaylist = {
        user_id: this.props.currentUser,
        name: `My Playlist #${userPlaylists.length + 1}`,
        private: false
    }
    this.props.createPlaylist(newPlaylist)
      .then(() => this.props.history.push(`/playlists/${this.props.lastPlaylist}`));
  };

  handleClick(e) {
    this.props.fetchPlaylist()
  }

  render() {
    // console.log(this.props.playlists)
    let playlistIndex = this.props.playlists;

    let userPlaylists = Object.values(playlistIndex).filter(playlist =>
      playlist.user_id === this.props.currentUser);

    return (
      <div className="user-data-directory">
        <Link id="sidebar-logo-link"to="/">
          <img id="sidebar-logo" src={window.tonifyWhiteURL} />
        </Link>

        <div className="sidebar-directory">
          <button className="sidebar-button" onClick={() => this.props.history.push('/')}>
              <i className="medium material-icons">home</i>
              <p>Home</p>
          </button>

          <button className="sidebar-button" onClick={() => this.props.history.push('/search')}>
              <i className="medium material-icons">search</i>
              <p>Search</p>
          </button>

          <button className="sidebar-button" onClick={() => this.props.history.push('/library')}>
              <i className="medium material-icons">library_music</i>
              <p>Your Library</p>
          </button>
        </div>


        <div className="library-buttons">
          <span id="sidebar-divider">PLAYLISTS</span>
          <button className="library-button" onClick={this.handleCreate}>
              <i id="plus-square" className="fas fa-plus-square"></i>
              <p>Create Playlist</p>
          </button> 


          <button className="library-button" onClick={() => this.props.history.push('/library/songs')}>
            <img id="liked-songs-icon" src={window.likedSongsIcon} />
            <p id="liked-">Liked Songs</p>
          </button> 
        </div>

        <div id="line-break"></div>
        
        <ul className="playlist-links">
          {userPlaylists.slice(0).reverse().map(playlist =>
            <li className="playlist-link" key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>
                <div className="sidebar-playlist-item">
                  {playlist.name}
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
 
export default withRouter(Sidebar);