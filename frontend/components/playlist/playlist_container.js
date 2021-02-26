import { connect } from "react-redux";
import { fetchPlaylist, updatePlaylist, deletePlaylist } from "../../actions/playlist_actions"
import { fetchUsers } from "../../actions/user_actions"
import { withRouter } from "react-router-dom"
import Playlist from "./playlist"

const mSTP = (state, ownProps) => {
  const { id } = state.session
  const { playlists, songs, users } = state.entities;
  const playlist = playlists[ownProps.match.params.id];
  const playlistSongs = Object.values(songs);

  return {
    currentUser: id,
    playlist,
    playlistSongs,
    users
  };
};

const mDTP = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    updatePlaylist: id => dispatch(updatePlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default withRouter(connect(mSTP, mDTP)(Playlist)); 