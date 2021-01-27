import { connect } from "react-redux";
import Sidebar from "./sidebar"
import { fetchPlaylists } from "../../actions/playlist_actions"

const mSTP = (state, ownProps) => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;
  return ({
    playlists,
    currentUser: currentUser
  });
};

const mDTP = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  }
};

export default connect(mSTP, mDTP)(Sidebar);