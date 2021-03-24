import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { like, unlike } from "../../actions/library_actions";
import Artist from "./artist"

const mSTP = (state, ownProps) => {
  const { id } = state.session;
  const { playlists, artists, albums, songs, users } = state.entities;
  const artist = artists[ownProps.match.params.id];
  const { loading } = state.ui;

  return {
    currentUser: id,
    playlists,
    artist,
    albums,
    songs,
    users,
    loading
  };
};

const mDTP = dispatch => {
  return {
    likeArtist: (likableId, likableType) => dispatch(like(likableId, likableType)),
    unlikeArtist: (likableId, likableType) => dispatch(unlike(likableId, likableType)),
  }
};

export default withRouter(connect(mSTP, mDTP)(Artist));