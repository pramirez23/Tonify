import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updatePlaylist } from '../../actions/playlist_actions'

class EditPlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    const { id, name, description } = this.props.playlist;

    this.state = {
      id,
      name,
      description,
      nameFocused: false,
      descriptionFocused: false,
      photoPreview: null,
      photoFile: null,
      isHovering: false
    }

    this.handleEnter = this.handleEnter.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleNameFocus = this.handleNameFocus.bind(this);
    this.handleDescriptionFocus = this.handleDescriptionFocus.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }
  
  handleEnter(e) {
    if (e.key === 'Enter') { e.preventDefault() }  
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

  handlePhoto(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoPreview: reader.result, photoFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoPreview: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { id, name, description, photoFile } = this.state;
    const formData = new FormData();

    formData.append('playlist[id]', id);
    formData.append('playlist[name]', name);
    formData.append('playlist[description]', description);
    if (photoFile) { formData.append('playlist[photo]', photoFile) };

    this.props.updatePlaylist(formData, id).then(this.props.closeModal());
  }

  render() { 
    const { name, description } = this.state;
    const playlist = this.props.playlist;

    const photoPreview = () => {
      if (this.state.photoPreview) {
        return <img className="edit-playlist-photo" src={this.state.photoPreview} alt="Playlist Photo"/>
      } else if (playlist.photo_url) {
        return <img className="edit-playlist-photo" src={playlist.photo_url} alt="Playlist Photo"/>
      } else {
        return <img className="edit-playlist-photo" src={window.defaultPlaylistPicture} alt="Playlist Photo"/>
      }
    };

    return (
      <div className="edit-playlist-container">
        <div className="edit-playlist-header">
          <span className="edit-playlist-title">Edit details</span>
          <button
            type="button"
            className="close-modal-button"
            onClick={() => this.props.closeModal()}>&#10005;</button>
        </div>

        <div className="edit-playlist-form">
          <div className="photo-upload-container">
            <input id="photo-upload"className="photo-upload-form" onChange={this.handlePhoto} type="file" hidden/>
            <label className="photo-overlay" onHover={this.handleHover} htmlFor="photo-upload">{window.photoOverlay}</label>
            <div className="photo-preview">{photoPreview()}</div>
          </div>

          <div className="edit-playlist-inputs">
            <label
              className={this.state.nameFocused ? "playlist-name-label" : "hide-name"}
              htmlFor="playlist-name-input">Name</label>
            <input
              id="playlist-name-input"
              type="text"
              value={name}
              maxLength="100"
              onChange={this.handleInput('name')}
              onFocus={() => this.handleNameFocus()}
              onBlur={() => this.handleNameBlur()}
              onKeyPress={this.handleEnter}/>
            <label
              className={this.state.descriptionFocused ? "playlist-description-label" : "hide-description"}
              htmlFor="playlist-description-input">Description</label>
            <textarea
              id="playlist-description-input"
              placeholder="Add an optional description"
              value={description ? description : ""}
              maxLength="200"
              onChange={this.handleInput('description')}
              onFocus={() => this.handleDescriptionFocus()}
              onBlur={() => this.handleDescriptionBlur()}
              onKeyPress={this.handleEnter}></textarea>
          </div>
        </div>

          <div className="edit-playlist-footer">
            <div className="save-button-container">
              <button className="save-button" onClick={this.handleSubmit}>SAVE</button>
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
  updatePlaylist: (playlist, playlistId) => dispatch(updatePlaylist(playlist, playlistId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditPlaylistForm);