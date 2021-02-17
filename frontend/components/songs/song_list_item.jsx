import React from 'react';
import { Link } from 'react-router-dom'; 

const SongListItem = ({ song, num }) => {
    return(
      <tr className="song">
        <td>{num}</td>
        <td>{song.title}</td>
        <td>{song.duration}</td>
      </tr>
    )
};

export default SongListItem;