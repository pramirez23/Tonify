import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className="playbar-container">
        playbar
      </div>
    );
  }
}
 
export default Playbar;