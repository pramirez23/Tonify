import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import EditPlaylistForm from './playlist/edit_playlist_form';
import DeletePlaylistConfirmation from './playlist/delete_playlist_confirmation';

const Modal = ({ modal }) => {
  if (!modal) return null;
  let component;

  switch (modal) {
    case 'Edit Playlist':
      component = <EditPlaylistForm />;
      break;
    case 'Delete Playlist':
      component = <DeletePlaylistConfirmation />;
      break;
    default:
      return null;
  }

  return (
    <div className={modal === "signup" ? "modal-background" : 'editP-background'} >
      <div className={modal === "signup" ? "modal-child" : 'editP-child'} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

// onClick = { modal === "editprofile" ? closeModal : null}


const mSTP = ({ ui }) => ({
  modal: ui.modal
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(Modal);