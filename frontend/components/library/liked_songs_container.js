import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import LikedSongs from "./liked_songs"

const mSTP = state => {
  const { id } = state.session;
  const { playlists, songs, users } = state.entities;
  const { loading } = state.ui.loading;
  const likedSongsDetails = users[state.session.id].likes.songs;

  return {
    currentUser: id,
    playlists,
    songs,
    users,
    likedSongsDetails,
    loading
  };
};

export default withRouter(connect(mSTP)(LikedSongs));