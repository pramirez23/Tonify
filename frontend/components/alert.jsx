import React from 'react';
import { connect } from 'react-redux';

class Alert extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: null
    }

    this.renderAlert = this.renderAlert.bind(this);
  }

  componentDidMount() {
    this.renderAlert();
  }

  componentDidUpdate(prevProps) {
    if (this.props.alert !== prevProps.alert) {
      this.renderAlert();
    }
  }

  renderAlert() {
    switch (this.props.alert) {
      case "Like":
        this.setState({ message: "Added to your Liked Songs" })
        break;
      case "Unlike":
        this.setState({ message: "Removed from your Liked Songs" })
        break;
      case "Playlist":
        this.setState({ message: "Added to playlist" })
        break
      default:
        this.setState({ message: null })
        break;
    }
  }

  render() {
    return (
      <div className={this.props.alert ? "add-song-confirmation-container" : "hide-alert"}>
        <span className="add-song-confirmation">{this.state.message}</span>
      </div>
    )
  }
}

const mSTP = ({ ui }) => ({
  alert: ui.alert
});

export default connect(mSTP)(Alert);