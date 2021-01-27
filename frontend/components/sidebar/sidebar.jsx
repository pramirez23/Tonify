import React from 'react';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    // console.log(this.props.playlists)
 
    let playlistIndex = this.props.playlists
    let userPlaylists = Object.values(playlistIndex).filter(playlist =>
       playlist.user_id === this.props.currentUser)

    return (
      <div>
        <ul>
          {userPlaylists.map(playlist =>
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
              </li>
          )}
        </ul>
      </div>
    );
  }
}
 
export default Sidebar;