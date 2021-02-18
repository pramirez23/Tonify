import React from 'react';
import { Link } from 'react-router-dom'; 

const SongListItem = ({ song, num }) => {
    return(
      <tr className="song">
        <td id="num-column">
          <div className="td-container">{num}</div>
        </td>

        <td id="title-column">
          <div className="td-container">{song.title}</div>
          <div>"this is the artist's name</div>
        </td>

        <td id="album-column">
          <div className="td-container">{song.album}
          </div>
        </td>

        <td id="date-added-column">
          <div className="td-container">Date added here</div>
        </td>

        <td id="duration-column">
          <div className="td-container">{song.duration}</div>
        </td>
      </tr>
    )
};

export default SongListItem;