import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideDropDown: true,
      scrollTop: null,
      scrollHeight: null,
      opacity: 0,
      content: null
    }
    
    this.dropDown = React.createRef();
    this.handleDropDown = this.handleDropDown.bind(this);
    this.convertOpacity = this.convertOpacity.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    const content = document.getElementsByClassName('main-content-container')[0];
    const currentUserId = this.props.currentUserId;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];
    const pageId = pathName[2];
    
    this.props.loading();
    content.scrollTo({ top: 0, behavior: "auto" });

    content.onscroll = () => {
      const { scrollTop, scrollHeight } = content;
      this.setState ({ scrollTop, scrollHeight });
      this.convertOpacity();
    }

    this.dropDownListener = e => {
      if (this.dropDown && !this.dropDown.contains(e.target)) {
        this.setState({
          hideDropDown: true
        });
      }
    }
    
    switch (location) {
      case "playlists":
        this.props.fetchPlaylist(pageId).then(() => this.renderContent());
        break;
      case "albums":
        this.props.fetchAlbum(pageId).then(() => this.renderContent());
        break;
      case "artists":
        this.props.fetchArtist(pageId).then(() => this.renderContent());
        break;
      case "library":
        if (pageId === "songs") {
          this.props.fetchLikedSongs(currentUserId).then(() => this.renderContent());
        }
      default:
        break;
    }
        
    document.addEventListener('click', this.dropDownListener, false);
  }
      
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const currentUserId = this.props.currentUserId;
      const content = document.getElementsByClassName('main-content-container')[0];
      const pathName = this.props.location.pathname.split('/');
      const location = pathName[1];
      const pageId = pathName[2];
  
      this.props.loading();
      content.scrollTo({ top: 0, behavior: "auto" });

      content.onscroll = () => {
        const { scrollTop, scrollHeight } = content;
        this.setState ({ scrollTop, scrollHeight });
        this.convertOpacity();
      }

      this.dropDownListener = e => {
        if (this.dropDown && !this.dropDown.contains(e.target)) {
          this.setState({
            hideDropDown: true
          });
        }
      }

      switch (location) {
        case "playlists":
          this.props.fetchPlaylist(pageId).then(() => this.renderContent());
          break;
        case "albums": 
          this.props.fetchAlbum(pageId).then(() => this.renderContent());
          break;
        case "artists":
          this.props.fetchArtist(pageId).then(() => this.renderContent());
          break;
        case "library":
          if (pageId === "songs") {
            this.props.fetchLikedSongs(currentUserId).then(() => this.renderContent());
          }
        default:
          break;
      }

      document.addEventListener('click', this.dropDownListener, false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.dropDownListener);
  }

  handleDropDown(e) {
    this.setState({
      hideDropDown: !this.state.hideDropDown
    })
  }

  renderContent() {
    const { playlists, albums, artists } = this.props;
    const pathName = this.props.location.pathname.split('/');
    const location = pathName[1];
    const pageId = pathName[2];

    switch (location) {
      case "playlists":
        this.setState({ content: playlists[pageId].name })
        break;
      case "albums":
        this.setState({ content: albums[pageId].title }) 
        break;
      case "artists":
        this.setState({ content: artists[pageId].name })
        break;
      case "library":
        if (pageId === "songs") {
          this.setState({ content: "Liked Songs" })
        }
        break;
      default:
        break;
    }
  }

  convertOpacity() {
    const { scrollTop, scrollHeight } = this.state;
    const oldRange = (scrollHeight - 140);
    const newRange = (10 - 1);
    let converted = (((scrollTop - 140) * newRange) / oldRange);
    this.setState({ opacity: converted })
  }

  render() {
    const backgroundColor = { backgroundColor: `hsla(0, 0%, 13%, ${this.state.opacity})`}

    return (
      <nav className="navbar" style={backgroundColor}>
        <div className="nav-content-container">
          <div className="nav-button-container">
            <span className="material-icons" onClick={() => this.props.history.goBack()}>chevron_left</span>
            <span className="material-icons" onClick={() => this.props.history.goForward()}>chevron_right</span>
          </div>

          <div className="navbar-content">
            <h1 className={this.state.scrollTop > 254 ? "navbar-title" : "hide-navbar-title"}>
              {this.state.content}
            </h1>
          </div>
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