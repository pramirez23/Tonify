import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import LikedSongs from "./liked_songs"

const mSTP = state => {
  const { id } = state.session;
  const { playlists, songs, users } = state.entities;

  return {
    currentUser: id,
    playlists,
    songs,
    users
  };
};

export default withRouter(connect(mSTP)(LikedSongs));