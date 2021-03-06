import { connect } from "react-redux";
import Playbar from "./playbar"

import {
  fetchNextSong,
  fetchPrevSong,
  fetchQueueSong,
  endLoopQueue,
  endQueue,
  beginLoopFromEnd,
  shuffleQueue,
  unshuffleQueue
} from "../../actions/playbar_actions";

import { openAlert, closeAlert } from '../../actions/alert_actions';
import { like, unlike, unlikeSongFromLibrary } from "../../actions/library_actions";
import { playSong, pauseSong } from '../../actions/playbar_actions';

const mSTP = (state) => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;
  
  const {
    isPlaying,
    isShuffled,
    currentSong,
    currentQueue,
    currentSongIndex,
    currentQueueLocation,
    shuffledQueue,
    shuffleIndex,
    userQueue
  } = state.ui.playbar;

  const currentUserLikes = state.entities.users[currentUser].likes;
  const likedSongs = currentUserLikes.songs

  return ({
    currentUser: currentUser,
    likedSongs,
    isPlaying,
    isShuffled,
    playlists,
    currentSong,
    currentSongIndex,
    currentQueue,
    currentQueueLocation,
    shuffledQueue,
    shuffleIndex,
    userQueue
  });
};

const mDTP = dispatch => {
  return {
    playSong: (song, pageIndex, pageQueue) => dispatch(playSong(song, pageIndex, pageQueue)),
    pauseSong: () => dispatch(pauseSong()),
    likeSong: (likableId, likableType) => dispatch(like(likableId, likableType)),
    unlikeSong: (likableId, likableType) => dispatch(unlike(likableId, likableType)),
    unlikeSongFromLibrary: (likableId, likableType) => dispatch(unlikeSongFromLibrary(likableId, likableType)),
    openAlert: (alertType) => dispatch(openAlert(alertType)),
    closeAlert: () => dispatch(closeAlert()),
    fetchNextSong: songId => dispatch(fetchNextSong(songId)),
    fetchPrevSong: songId => dispatch(fetchPrevSong(songId)),
    fetchQueueSong: songId => dispatch(fetchQueueSong(songId)),
    endLoopQueue: () => dispatch(endLoopQueue()),
    endQueue: pageQueue => dispatch(endQueue(pageQueue)),
    beginLoopFromEnd: currentQueue => dispatch(beginLoopFromEnd(currentQueue)),
    shuffleQueue: shuffledQueue => dispatch(shuffleQueue(shuffledQueue)),
    unshuffleQueue: () => dispatch(unshuffleQueue())
  };
};

export default connect(mSTP, mDTP)(Playbar);