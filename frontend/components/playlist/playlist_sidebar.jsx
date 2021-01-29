import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistSidebar = ({ playlists, currentUser }) => {
  let userPlaylists = Object.values(playlists).filter(playlist =>
    playlist.user_id === currentUser);
    
  return (
    userPlaylists.slice(0).reverse().map(playlist =>
      <li className="playlist-link" key={playlist.id}>
        <Link to={`/playlists/${playlist.id}`}>
          <div className="sidebar-playlist-item">
            {playlist.name}
          </div>
        </Link>
      </li>
    )
  )
};

export default PlaylistSidebar;


