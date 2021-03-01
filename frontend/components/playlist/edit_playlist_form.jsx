import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updatePlaylist } from '../../actions/playlist_actions'

class EditPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
    this.state.playlistUrl = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() { 
    return (
      <div>
        <p>This is the edit form</p>
        <p>{this.state}</p>
      </div>
    );
  }
}

const mSTP = ({ entities: { playlists }, ui }) => ({
  playlist: playlists[ui.id]
})
 
const mDTP = dispatch => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditPlaylistForm);