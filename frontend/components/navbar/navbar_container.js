import { connect } from "react-redux";
import Navbar from "./navbar"
import { logout } from '../../actions/session_actions';
import { fetchUser } from "../../actions/user_actions";
import { fetchPlaylist } from "../../actions/playlist_actions";
import { fetchArtist } from "../../actions/artist_actions";
import { fetchAlbum } from "../../actions/album_actions";

import {
  fetchLikedPlaylists,
  fetchLikedArtists,
  fetchLikedAlbums, 
  fetchLikedSongs,
  fetchLikedSongsPreview
} from "../../actions/library_actions";

import { loading } from '../../actions/loading_actions';
import { receiveSearchPage } from "../../actions/search_actions";

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
    receiveSearchPage: () => dispatch(receiveSearchPage()),
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchArtist: id => dispatch(fetchArtist(id)),
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