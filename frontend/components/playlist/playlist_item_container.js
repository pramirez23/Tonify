import { connect } from "react-redux";
import { fetchPlaylist } from "../../actions/playlist_actions"
import { fetchUsers } from "../../actions/user_actions"
import { withRouter } from "react-router-dom"
import PlaylistItem from "./playlist_item"

const mSTP = (state, ownProps) => {
  const { id } = state.session
  const { playlists, songs, users } = state.entities;
  const playlist = playlists[ownProps.match.params.id];

  return {
    currentUser: id,
    playlist,
    songs,
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

export default withRouter(connect(mSTP, mDTP)(PlaylistItem)); 