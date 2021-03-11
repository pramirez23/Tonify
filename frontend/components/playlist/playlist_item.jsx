import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaylistContent from './playlist_content';

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }
  
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchPlaylist(id).then(() => {
  //     this.setState({
  //       isLoading: false
  //     })
  //   });
  // }
  
  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.id !== prevProps.match.params.id) {
  //     const content = document.getElementsByClassName('main-content-container')[0];
  //     const { id } = this.props.match.params;

  //     content.scrollTo({ top: 0, behavior: "auto" });
      
  //     this.props.fetchPlaylist(id).then(() => {
  //       this.setState({
  //         isLoading: false
  //       })
  //     });
  //   }
  // }

  render() {
    if (!this.props.playlist) {
      return null;
    }

    const { playlist, songs, currentUser, users } = this.props;
    const playlistCreator = playlist.user_id; 
    const username = users[playlistCreator].username;

    return (
      <PlaylistContent 
        playlist={playlist}
        currentUser={currentUser}
        playlistCreator={playlistCreator}
        username={username}
        songs={songs}
        history={history}
      />
    )
  }
}

export default withRouter(PlaylistItem);