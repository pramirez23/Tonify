import { connect } from "react-redux";
import Search from "./search";
import { createPlaylist, fetchPlaylist } from "../../actions/playlist_actions";
import { fetchLikedPlaylists } from "../../actions/library_actions";

const mSTP = state => {
  const currentUser = state.session.id;
  const { playlists, artists, albums, songs } = state.entities;
  const searchResults = state.ui.searchResults
  return ({
    searchResults,
    playlists,
    artists,
    albums,
    songs
  });
};

const mDTP = dispatch => {
  return {
    fetchLikedPlaylists: currentUserId => dispatch(fetchLikedPlaylists(currentUserId)),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  }
};

export default connect(mSTP, mDTP)(Search);