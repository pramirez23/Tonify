import React from 'react';
import { Link } from 'react-router-dom'; 

const SongListItem = ({ song }) => {
    return(
      <div>
        <p>{song.title}</p>
        <p>{song.track_num}</p>
        <p>{song.duration}</p>
      </div>
    )
};

export default SongListItem;