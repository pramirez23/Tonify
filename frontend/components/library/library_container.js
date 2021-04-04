import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { createPlaylist } from "../../actions/playlist_actions"
import Library from "./library";

import {
  playSong,
  pauseSong,
  fetchLibraryItem
} from '../../actions/playbar_actions';

const mSTP = (state) => {
  const { id } = state.session;
  const { loading } = state.ui;
  const { playlists, artists, albums, songs, users } = state.entities;
  const currentUserId = state.session.id;

  const {
    isPlaying,
    currentSong,
    currentQueue,
    currentQueueLocation,
    currentSongIndex,
    pageQueue,
    userQueue
  } = state.ui.playbar;

  return {
    currentUser: id,
    playlists,
    artists,
    albums,
    songs,
    users,
    currentUserId,
    loading,
    isPlaying,
    currentSong,
    currentQueue,
    currentQueueLocation,
    currentSongIndex,
    pageQueue,
    userQueue,
    lastPlaylist: Object.keys(playlists).slice(-1)[0],
  };
};

const mDTP = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    fetchLibraryItem: (itemId, itemType, itemLocation) => dispatch(fetchLibraryItem(itemId, itemType, itemLocation)),
    playSong: (song, pageIndex, pageQueue, location) => dispatch(playSong(song, pageIndex, pageQueue, location)),
    pauseSong: () => dispatch(pauseSong()),
  }
};

export default withRouter(connect(mSTP, mDTP)(Library));