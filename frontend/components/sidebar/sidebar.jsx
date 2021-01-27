import React from 'react';
import { Link } from "react-router-dom";

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
    const userPlaylistLength = Object.values(this.props.playlists).length
    const newPlaylist = {
        user_id: this.props.currentUser,
        name: `My Playlist #${userPlaylistLength + 1}`,
        private: false
    }
    this.props.createPlaylist(newPlaylist)
      .then((newPlaylist) => this.props.history.push(`/playlists/${newPlaylist.id}`));
  }

  render() {
    // console.log(this.props.playlists)
    let playlistIndex = this.props.playlists;

    let userPlaylists = Object.values(playlistIndex).filter(playlist =>
      playlist.user_id === this.props.currentUser);

    return (
      <div className="user-data-directory">

        <button onClick={this.handleCreate}>
            <i className="fas fa-plus-square"></i>
            <p>Create Playlist</p>
        </button> 

        <ul>
          {userPlaylists.slice(0).reverse().map(playlist =>
              <li key={playlist.id}>
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
 
export default Sidebar;