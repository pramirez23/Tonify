import React from 'react';

class LikedPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.emptyOrFilled = this.emptyOrFilled.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
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

  emptyOrFilled() {
    const { playlists } = this.props; 

    if (!playlists) {
      return (
        <div className="empty-liked-playlists">
          <i className="fas fa-music"></i>
          <p>Create your first playlist</p>
          <p>It's easy, we'll help you.</p>
          <button>CREATE PLAYLIST</button>
        </div>
      )
    } else {
      return (
        <div className="empty-liked-playlists">
          <i className="fas fa-music"></i>
          <p className="empty-liked-playlist-title">Create your first playlist</p>
          <p className="empty-liked-playlist-text">It's easy, we'll help you.</p>
          <button className="liked-create-playlist" onClick={this.handleCreate}>CREATE PLAYLIST</button>
        </div>
      )
    }
  }

  render() { 
    return (
      <>
        {this.emptyOrFilled()}
      </>
    );
  }
}
 
export default LikedPlaylists;