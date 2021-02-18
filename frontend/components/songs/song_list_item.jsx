import React from 'react';
import { Link } from 'react-router-dom'; 

const SongListItem = ({ song, num }) => {
    return(
      <tr className="song">
        <td className="num-column">{num}</td>

        <td className="title-column">
          {song.title}
          <br/>
          "this is the artist's name"
        </td>

        <td className="album-column">Album title placeholder</td>

        <td className="date-added-column">Date added here</td>

        <td className="duration-column">{song.duration}</td>
      </tr>
    )
};

export default SongListItem;