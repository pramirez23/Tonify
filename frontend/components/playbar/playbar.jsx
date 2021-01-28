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
        <div id="playbar-controls">
          <i id="random" className="fas fa-random"></i>
          <i id="back" className="fas fa-step-backward"></i>
          <i id="play" className="fas fa-play-circle"></i>
          <i id="forward" className="fas fa-step-forward"></i>
          <i id="repeat" className="fas fa-redo"></i>
        </div>
      </div>
    );
  }
}
 
export default Playbar;