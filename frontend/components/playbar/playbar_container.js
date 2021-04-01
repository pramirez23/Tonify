import { connect } from "react-redux";
import Playbar from "./playbar"
import { like, unlike } from "../../actions/library_actions";
import { fetchNextSong, fetchQueueSong } from "../../actions/playbar_actions";

const mSTP = (state) => {
  const currentUser = state.session.id;
  const { playlists } = state.entities;
  return ({
    currentUser: currentUser,
    playlists,
  });
};

const mDTP = dispatch => {
  return {
    likeSong: (likableId, likableType) => dispatch(like(likableId, likableType)),
    unlikeSong: (likableId, likableType) => dispatch(unlike(likableId, likableType)),
    fetchNextSong: songId => dispatch(fetchNextSong(songId)),
    fetchQueueSong: songId => dispatch(fetchQueueSong(songId))
  };
};

export default connect(mSTP, mDTP)(Playbar);   