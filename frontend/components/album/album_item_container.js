import { connect } from "react-redux";
import { fetchAlbum } from "../../actions/album_actions"
import { withRouter } from "react-router-dom"
import AlbumItem from "./album_item"

const mSTP = (state, ownProps) => {
  const { id } = state.session;
  const { playlists, albums, songs, users } = state.entities;
  const album = albums[ownProps.match.params.id];
  const { loading } = state.ui;

  return {
    currentUser: id,
    playlists,
    album,
    songs,
    users,
    loading
  };
};

const mDTP = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
  }
};

export default withRouter(connect(mSTP, mDTP)(AlbumItem));