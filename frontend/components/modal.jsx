import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import EditPlaylistForm from './playlist/edit_playlist_form';
import DeletePlaylistConfirmation from './playlist/delete_playlist_confirmation';

const Modal = (props) => {
  if (!props.modal) return null;
  let component;

  switch (props.modal.modal) {
    case 'editPlaylist':
      component = <EditPlaylistForm />;
      break;
    case 'deletePlaylist':
      component = <DeletePlaylistConfirmation />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-close" onClick={() => props.closeModal()} />
      <div
        className={ props.modal.modal === "editPlaylist" ? "edit-modal-child" : "delete-modal-child" }
        onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mSTP = ({ ui }) => ({
  modal: ui.modal
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);