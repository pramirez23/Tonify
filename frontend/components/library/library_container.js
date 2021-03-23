import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createPlaylist } from "../../actions/playlist_actions"
import Library from "./library";

const mSTP = (state) => {
  const { id } = state.session;
  const { loading } = state.ui;
  const { playlists, artists, albums, songs, users } = state.entities;
  const currentUserId = state.session.id;
  
  return {
    currentUser: id,
    playlists,
    songs,
    users,
    currentUserId,
    loading,
    lastPlaylist: Object.keys(playlists).slice(-1)[0]
  };
};

const mDTP = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  }
};

export default withRouter(connect(mSTP, mDTP)(Library));