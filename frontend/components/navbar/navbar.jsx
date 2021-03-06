import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true
    }
    
    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.dropDownListener = e => {
      if (this.dropDown && !this.dropDown.contains(e.target)) {
        this.setState({
          hideDropDown: true
        });
      }
    }

    document.addEventListener('click', this.dropDownListener, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.dropDownListener);
  }

  handleDropDown(e) {
    this.setState({
      hideDropDown: !this.state.hideDropDown
    })
  }

  render() { 
    return (
      <div className="navbar">
        <div className="nav-button-container">
          <button>
            <i className="fas fa-chevron-circle-left"></i>
            <div className="button-background"></div>
          </button>

          <button>
            <i className="fas fa-chevron-circle-right"></i>
            <div className="button-background"></div>
          </button>
        </div>

        <div className="user-dropdown" onClick={() => this.handleDropDown()} ref={div => this.dropDown = div}>
          <button>
            <span>{this.props.currentUsername}</span>
            {this.state.hideDropDown ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}
          </button>
          {!this.state.hideDropDown && <div className="user-dropdown-options" onClick={e => e.stopPropagation()}>
            <div onClick={() => this.handleEdit(playlist.id)} >GitHub</div>
            <div onClick={() => this.handleDelete(playlist.id)} >LinkedIn</div>
            <div onClick={() => this.handleDelete(playlist.id)} >AngelList</div>
            <div onClick={() => this.handleDelete(playlist.id)} >Portfolio</div>
            <div onClick={() => this.handleDelete(playlist.id)} className="logout">Log out</div>
          </div>}
        </div>
      </div>
    );
  }
}
 
export default withRouter(Navbar);