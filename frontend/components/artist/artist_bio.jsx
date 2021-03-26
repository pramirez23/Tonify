import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../../actions/modal_actions"
import { withRouter } from 'react-router-dom';

const ArtistBio = (props) => {
  if (!props.artist) return null;

  const { artist } = props;

  return (
    <div className="artist-bio-container">
      <button
        type="button"
        className="close-modal-button"
        onClick={() => this.props.closeModal()}>&#10005;</button>

      <div className="artist-bio-photo">
        <img src={artist.photos[1]} alt="Artist Bio Photo"/>
      </div>

      <div className="artist-bio">
        <p className="artist-bio-text">{artist.bio}</p>
      </div>
    </div>
  )
};

const mSTP = ({ entities: { artists }, ui }) => ({
  artist: artists[ui.modal.id]
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(ArtistBio));
