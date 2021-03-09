import React from 'react';
import { connect } from 'react-redux';
import { closeAlert } from '../actions/alert_actions';

const Alert = (props) => {
  return (
    <div className={props.alert ? "add-song-confirmation-container" : "hide-alert"}>
      <span className="add-song-confirmation">Added to playlist</span>
    </div>
  )
}

const mSTP = ({ ui }) => ({
  alert: ui.alert
});

export default connect(mSTP)(Alert);