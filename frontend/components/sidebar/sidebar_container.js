import { connect } from "react-redux";
import Sidebar from "./sidebar"
import { createPlaylist, fetchPlaylists, fetchPlaylist } from "../../actions/playlist_actions"

const mSTP = (state, ownProps) => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;
  return ({
    playlists,
    currentUser: currentUser,
    lastPlaylist: Object.keys(playlists).slice(-1)[0]
  });
};

const mDTP = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  }
};

export default connect(mSTP, mDTP)(Sidebar); 