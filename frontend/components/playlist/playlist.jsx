import React from 'react';
import { Link } from 'react-router-dom';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchUsers();
  }

  render() { 
    
    if (!this.props.playlist) {
      return null;
    }

    const playlistName = this.props.playlist.name;
    const userId = this.props.playlist.user_id;
    const username = this.props.users[userId].username;

    return (
      <div id="playlist-show">
        <div className="playlist-info">
          <h1 className="playlist-name">{playlistName}</h1>
          <p className="username">{username}</p>
        </div>
      </div>
    );
  }
}
export default Playlist;