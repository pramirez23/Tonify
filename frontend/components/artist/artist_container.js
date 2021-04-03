import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { like, unlike } from "../../actions/library_actions";
import { openAlert, closeAlert } from '../../actions/alert_actions';
import { openModal } from '../../actions/modal_actions';

import {
  playSong,
  pauseSong,
  fetchPage
} from '../../actions/playbar_actions';

import Artist from "./artist"

const mSTP = (state, ownProps) => {
  const { id } = state.session;
  const {
    playlists,
    artists,
    albums,
    songs,
    users
  } = state.entities;
  const artist = artists[ownProps.match.params.id];
  const { loading } = state.ui;
  const currentUserLikes = users[id].likes;
  const likedArtists = currentUserLikes.artists;

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
    likedArtists,
    playlists,
    artist,
    albums,
    songs,
    users,
    loading,
    isPlaying,
    currentSong,
    currentQueue,
    currentQueueLocation,
    currentSongIndex,
    pageQueue,
    userQueue
  };
};

const mDTP = dispatch => {
  return {
    fetchPage: (pageQueue, location) => dispatch(fetchPage(pageQueue, location)),
    playSong: (song, pageIndex, pageQueue, location) => dispatch(playSong(song, pageIndex, pageQueue, location)),
    pauseSong: () => dispatch(pauseSong()),
    likeArtist: (likableId, likableType) => dispatch(like(likableId, likableType)),
    unlikeArtist: (likableId, likableType) => dispatch(unlike(likableId, likableType)),
    openAlert: (alertType) => dispatch(openAlert(alertType)),
    closeAlert: () => dispatch(closeAlert()),
    openBio: id => dispatch(openModal(id, 'artistBio'))
  }
};

export default withRouter(connect(mSTP, mDTP)(Artist));