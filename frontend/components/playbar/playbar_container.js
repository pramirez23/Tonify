import { connect } from "react-redux";
import Playbar from "./playbar"
import { fetchNextSong, fetchQueueSong } from "../../actions/playbar_actions";
import { openAlert, closeAlert } from '../../actions/alert_actions';
import { like, unlike, unlikeSongFromLibrary } from "../../actions/library_actions";
import { playSong, pauseSong } from '../../actions/playbar_actions';

const mSTP = (state) => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;
  const { isPlaying, currentSong, currentQueue, currentSongIndex, userQueue } = state.ui.playbar;
  const currentUserLikes = state.entities.users[currentUser].likes;
  const likedSongs = currentUserLikes.songs;

  return ({
    currentUser: currentUser,
    likedSongs,
    isPlaying,
    playlists,
    currentSong,
    currentSongIndex,
    currentQueue,
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
    fetchQueueSong: songId => dispatch(fetchQueueSong(songId))
  };
};

export default connect(mSTP, mDTP)(Playbar);   