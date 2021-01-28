import { connect } from "react-redux";
import { fetchPlaylists } from "../../actions/playlist_actions"
import { fetchUsers } from "../../actions/user_actions"
import { withRouter } from "react-router-dom"
import Playlist from "./playlist"

const mSTP = (state, ownProps) => {
  const { playlists, users } = state.entities;
  return {
    playlist: playlists[ownProps.match.params.id],
    users
  };
};

const mDTP = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default withRouter(connect(mSTP, mDTP)(Playlist)); 