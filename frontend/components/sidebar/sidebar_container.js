import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { createPlaylist, fetchPlaylist } from "../../actions/playlist_actions";
import { fetchLikedPlaylists } from "../../actions/library_actions";

const mSTP = (state, ownProps) => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;
  const currentUserLikes = state.entities.users[currentUser].likes;
  const likedPlaylists = Object.keys(currentUserLikes.playlists);

  return ({
    playlists,
    currentUser,
    likedPlaylists,
    lastPlaylist: Object.keys(playlists).slice(-1)[0]
  });
};

const mDTP = dispatch => {
  return {
    fetchLikedPlaylists: currentUserId => dispatch(fetchLikedPlaylists(currentUserId)),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  }
};

export default connect(mSTP, mDTP)(Sidebar);