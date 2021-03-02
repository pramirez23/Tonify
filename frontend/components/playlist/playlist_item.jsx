import React from 'react';
import PlaylistContent from './playlist_content';

export default class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlaylist(id).then(() => {
      this.setState({
        isLoading: false
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params;
      this.props.fetchPlaylist(id).then(() => {
        this.setState({
          isLoading: false
        })
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="spinner-container">
          <i className="fas fa-spinner"></i>
        </div>
      )
    }

    if (!this.props.playlist) {
      return null;
    }

    const { playlist, playlistSongs, currentUser, users } = this.props;
    const playlistCreator = playlist.user_id; 
    const username = users[playlistCreator].username;

    return (
      <PlaylistContent 
        playlist={playlist}
        currentUser={currentUser}
        playlistCreator={playlistCreator}
        username={username}
        songs={playlistSongs}
      />
    )
  }
}
