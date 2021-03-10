import React from 'react'
import { connect } from "react-redux";

function Loading(props) {
  return (
    <div className={props.loading ? "spinner-container" : "hidden"}>
      <i className="fas fa-spinner"></i>
    </div>
  )
}

const mSTP = state => {
  const { loading } = state.ui;
  return ({ loading })
};

export default connect(mSTP)(Loading);

