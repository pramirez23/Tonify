import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import LibraryItem from "./library_item";

import {
  playSong,
  pauseSong,
  fetchLibraryItem
} from '../../actions/playbar_actions';

const mSTP = state => {
  const { songs } = state.entities;

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
    songs,
    isPlaying,
    currentSong,
    currentQueue,
    currentQueueLocation,
    currentSongIndex,
    pageQueue,
    userQueue
  }
}

const mDTP = dispatch => {
  return {
    fetchLibraryItem: (itemId, itemType, itemLocation) => dispatch(fetchLibraryItem(itemId, itemType, itemLocation)),
    playSong: (song, pageIndex, pageQueue, location) => dispatch(playSong(song, pageIndex, pageQueue, location)),
    pauseSong: () => dispatch(pauseSong()),
  }
};

export default withRouter(connect(mSTP, mDTP)(LibraryItem));