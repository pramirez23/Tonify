import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createPlaylist } from "../../actions/playlist_actions"
import LikedPlaylists from "./liked_playlists";
const mSTP = (state) => {
  const { id } = state.session;
  const { playlists, users } = state.entities;
  
  return {
    currentUser: id,
    playlists,
    users,
    lastPlaylist: Object.keys(playlists).slice(-1)[0]
  };
};

const mDTP = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  }
};

export default withRouter(connect(mSTP, mDTP)(LikedPlaylists));