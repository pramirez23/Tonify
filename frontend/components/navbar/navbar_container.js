import { connect } from "react-redux";
import Navbar from "./navbar"
import { logout } from '../../actions/session_actions';
import { fetchPlaylist } from "../../actions/playlist_actions";
import { fetchAlbum } from "../../actions/album_actions";

import {
  fetchLikedPlaylists,
  fetchLikedArtists,
  fetchLikedAlbums, 
  fetchLikedSongs,
  fetchLikedSongsPreview
} from "../../actions/library_actions";

import { fetchUser } from "../../actions/user_actions";
import { loading } from '../../actions/loading_actions';

const mSTP = state => {
  const currentUserId = state.session.id;
  const { playlists, albums, artists, users } = state.entities;
  const currentUsername = users[currentUserId].username;

  return ({
    currentUserId,
    currentUsername,
    playlists,
    albums,
    artists
  });
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchLikedPlaylists: (currentUserId) => dispatch(fetchLikedPlaylists(currentUserId)),
    fetchLikedArtists: (currentUserId) => dispatch(fetchLikedArtists(currentUserId)),
    fetchLikedAlbums: (currentUserId) => dispatch(fetchLikedAlbums(currentUserId)),
    fetchLikedSongs: (currentUserId) => dispatch(fetchLikedSongs(currentUserId)),
    fetchLikedSongsPreview: (currentUserId) => dispatch(fetchLikedSongsPreview(currentUserId)),
    fetchUser: id => dispatch(fetchUser(id)),
    loading: () => dispatch(loading())
  }
};

export default connect(mSTP, mDTP)(Navbar);