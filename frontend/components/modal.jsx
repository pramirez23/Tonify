import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import EditPlaylistForm from './playlist/edit_playlist_form';
import DeletePlaylistConfirmation from './playlist/delete_playlist_confirmation';
import ArtistBio from './artist/artist_bio';

const Modal = (props) => {
  if (!props.modal) return null;

  let component;
  let klass;

  switch (props.modal.modal) {
    case 'editPlaylist':
      component = <EditPlaylistForm />;
      klass = "edit-modal-child";
      break;
    case 'deletePlaylist':
      component = <DeletePlaylistConfirmation />;
      klass = "delete-modal-child";
      break;
    case 'artistBio':
      component = <ArtistBio />;
      klass = "artist-bio-modal-child"
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-close" onClick={() => props.closeModal()} />
      <div
        className={klass}
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