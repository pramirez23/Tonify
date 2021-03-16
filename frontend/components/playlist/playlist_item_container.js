import { connect } from "react-redux";
import { fetchPlaylist } from "../../actions/playlist_actions"
import { fetchUsers } from "../../actions/user_actions"
import { withRouter } from "react-router-dom"
import PlaylistItem from "./playlist_item"

const mSTP = (state, ownProps) => {
  const { id } = state.session;
  const { playlists, songs, users } = state.entities;

  return {
    currentUser: id,
    playlists,
    songs,
    users,
  };
};

export default withRouter(connect(mSTP)(PlaylistItem)); 