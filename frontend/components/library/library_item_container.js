import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import LibraryItem from "./library_item";

const mSTP = state => {
  const { songs } = state.entities;

  return {
    songs
  }
}

export default withRouter(connect(mSTP)(LibraryItem));