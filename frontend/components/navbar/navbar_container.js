import { connect } from "react-redux";
import Navbar from "./navbar"
import { logout } from '../../actions/session_actions';
import { fetchHome } from '../../actions/home_actions';
import { fetchUser } from "../../actions/user_actions";
import { fetchPlaylist } from "../../actions/playlist_actions";
import { fetchArtist } from "../../actions/artist_actions";
import { fetchAlbum } from "../../actions/album_actions";
import { playSong, pauseSong } from '../../actions/playbar_actions';

import {
  fetchHipHop,
  fetchPop,
  fetchRock,
  fetchRnb
} from "../../actions/genre_actions";

import {
  fetchLikedPlaylists,
  fetchLikedArtists,
  fetchLikedAlbums, 
  fetchLikedSongs,
  fetchLikedSongsPreview
} from "../../actions/library_actions";

import { loading } from '../../actions/loading_actions';
import { fetchSearchResults, receiveSearchPage } from "../../actions/search_actions";

const mSTP = state => {
  const currentUserId = state.session.id;
  const { playlists, albums, artists, users } = state.entities;
  const currentUsername = users[currentUserId].username;

  const {
    isPlaying,
    currentSong,
    currentQueue,
    currentQueueLocation,
    currentSongIndex,
    pageQueue,
    userQueue
  } = state.ui.playbar;

  return ({
    currentUserId,
    currentUsername,
    playlists,
    albums,
    artists,
    isPlaying,
    currentSong,
    currentQueue,
    currentQueueLocation,
    currentSongIndex,
    pageQueue,
    userQueue
  });
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    playSong: (song, pageIndex, pageQueue, location) => dispatch(playSong(song, pageIndex, pageQueue, location)),
    pauseSong: () => dispatch(pauseSong()),
    receiveSearchPage: () => dispatch(receiveSearchPage()),
    fetchSearchResults: query => dispatch(fetchSearchResults(query)),
    fetchHome: () => dispatch(fetchHome()),
    fetchHipHop: () => dispatch(fetchHipHop()),
    fetchPop: () => dispatch(fetchPop()),
    fetchRock: () => dispatch(fetchRock()),
    fetchRnb: () => dispatch(fetchRnb()),
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