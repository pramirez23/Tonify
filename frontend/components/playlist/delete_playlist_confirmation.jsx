import React from 'react';
import { connect } from 'react-redux';
import { deletePlaylist } from "../../actions/playlist_actions"
import { closeModal } from "../../actions/modal_actions"
import { withRouter } from 'react-router-dom';

const DeletePlaylistConfirmation = (props) => {
  if (!props.playlist) return null;

  const { playlist } = props;

  const handleDelete = (playlistId) => {
    props.deletePlaylist(playlistId)
      .then(() => {
        props.closeModal();
        props.history.push("/library/playlists");
      })
  }
  
  return (
    <div className="delete-playlist-container">
      <div className="delete-playlist-prompt">
        <p>`Delete ${playlist.name}?`</p>
        <p>This action cannot be undone.</p>
      </div>

      <div className="delete-playlist-buttons">
        <button onClick={() => props.closeModal()}>CANCEL</button>
        <button onClick={() => handleDelete(playlist.id)}>DELETE</button>
      </div>
    </div>
  )
};

const mSTP = ({ entities: { playlists }, ui }) => ({
  playlist: playlists[ui.modal.id]
})

const mDTP = dispatch => ({
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(DeletePlaylistConfirmation));
