import { connect } from "react-redux";
import { fetchPlaylist } from "../../actions/playlist_actions"
import { fetchUsers } from "../../actions/user_actions"
import { fetchPlaylistSongs } from "../../actions/song_actions"
import { withRouter } from "react-router-dom"
import Playlist from "./playlist"

const mSTP = (state, ownProps) => {
  const { playlists, songs, users } = state.entities;
  const playlist = playlists[ownProps.match.params.id];
  const playlistSongs = Object.values(songs);

  return {
    playlist,
    playlistSongs,
    users
  };
};

const mDTP = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default withRouter(connect(mSTP, mDTP)(Playlist)); 