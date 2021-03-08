import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      scrollY: null
    }
    
    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    const content = document.getElementsByClassName('main-content-container')[0];

    content.onscroll = () => {
      console.log(content.scrollTop)
    }

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
      <nav className="navbar">
        <div className="nav-button-container">
            <span className="material-icons" onClick={() => this.props.history.goBack()}>chevron_left</span>
            <span className="material-icons" onClick={() => this.props.history.goForward()}>chevron_right</span>
        </div>

        <div className="user-dropdown" onClick={() => this.handleDropDown()} ref={div => this.dropDown = div}>
          <button>
            <span>{this.props.currentUsername}</span>
            {this.state.hideDropDown ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}
          </button>

          {!this.state.hideDropDown && <div className="user-dropdown-options" onClick={e => e.stopPropagation()}>
            <div className="user-dropdown-option" onClick={() => window.open("https://github.com/pramirez23/Tonify", "_blank")} >
              <span>GitHub</span>
              <i className="fab fa-github"></i>
            </div>

            <div className="user-dropdown-option" onClick={() => window.open("https://www.linkedin.com/in/paul-ramirez-432786152/", "_blank")} >
              <span>LinkedIn</span>
                <i className="fab fa-linkedin"></i>
            </div>

            <div className="user-dropdown-option" onClick={() => window.open("https://angel.co/u/paulramirez", "_blank")} >
              <span>AngelList</span>
                <i className="fab fa-angellist"></i>
            </div>

            <div className="user-dropdown-option" onClick={() => window.open("http://paulramirez.dev/", "_blank")} >
              <span>Portfolio</span>
                <i className="fas fa-user-circle"></i>
            </div>

            <div id="logout-dropdown" onClick={this.props.logout} >Log out</div>
          </div>}
        </div>
      </nav>
    );
  }
}
 
export default withRouter(Navbar);