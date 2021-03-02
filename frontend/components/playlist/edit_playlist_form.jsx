import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updatePlaylist } from '../../actions/playlist_actions'

class EditPlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    const { name, description } = this.props.playlist

    this.state = {
      name,
      description,
      nameFocused: false,
      descriptionFocused: false,
      playlistUrl: null
    }

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameFocus = this.handleNameFocus.bind(this);
    this.handleDescriptionFocus = this.handleDescriptionFocus.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleNameFocus() {
    this.setState({ 
      nameFocused: true
    });
  }

  handleNameBlur() {
    this.setState({ 
      nameFocused: false
    });
  }

  handleDescriptionFocus() {
    this.setState({
      descriptionFocused: true
    });
  }

  handleDescriptionBlur() {
    this.setState({
      descriptionFocused: false
    });
  }

  render() { 
    const { name, description } = this.state

    return (
      <div className="edit-playlist-container">
        <div className="edit-playlist-header">
          <span className="edit-playlist-title">Edit details</span>
          <button
            className="close-modal-button"
            onClick={() => this.props.closeModal()}>&#10005;</button>
        </div>

        <div className="edit-playlist-form">
          <input type="file"/>

          <div className="edit-playlist-inputs">
            <label
              className={this.state.nameFocused ? "playlist-name-label" : "hide-input"}
              htmlFor="playlist-name-input">Name</label>
            <input
              id="playlist-name-input"
              type="text"
              value={name}
              onChange={this.handleInput('name')}
              onFocus={() => this.handleNameFocus()}
              onBlur={() => this.handleNameBlur()}/>
            <label
              className={this.state.descriptionFocused ? "playlist-description-label" : "hide-input"}
              htmlFor="playlist-description-input">Description</label>
            <textarea
              id="playlist-description-input"
              placeholder="Add an optional description"
              value={description ? description : ""}
              onChange={this.handleInput('description')}
              onFocus={() => this.handleDescriptionFocus()}
              onBlur={() => this.handleDescriptionBlur()}></textarea>
          </div>
        </div>

          <div className="edit-playlist-footer">
            <div className="save-button-container">
              <button className="save-button">SAVE</button>
            </div>
            <p>By proceeding, you agree to give Tonify access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
          </div>
      </div>
    );
  }
}

const mSTP = ({ entities: { playlists }, ui }) => ({
  playlist: playlists[ui.modal.id]
})
 
const mDTP = dispatch => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditPlaylistForm);