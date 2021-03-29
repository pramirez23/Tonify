import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../../actions/modal_actions"
import { withRouter } from 'react-router-dom';

const ArtistBio = (props) => {
  if (!props.artist) return null;

  const { artist } = props;

  return (
    <>
      <div className="artist-modal-close-container">
        <button
          type="button"
          className="artist-close-modal-button"
          onClick={() => props.closeModal()}>&#10005;</button>
      </div>

      <div className="artist-bio-container">
        <div className="artist-bio-photo-container">
          <img className="artist-bio-photo" src={artist.photos[2]} alt="Artist Bio Photo"/>
        </div>

        <div className="artist-bio">
          <p className="artist-bio-text">{artist.bio}</p>
        </div>
      </div>
    </>
  )
};

const mSTP = ({ entities: { artists }, ui }) => ({
  artist: artists[ui.modal.id]
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(ArtistBio));
