import React from 'react';

export default (props) => {
  const { songs } = props;

  if (!songs) {
    return null
  }
  
  const songsPreview = songs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((song, idx) => {
    return (
      <span key={idx}>
        <span className={idx !== 0 ? "library-dot" : "hidden"}>&nbsp;•&nbsp;</span>
        <span className="song-preview-title">{song.title}</span>
        &nbsp;
        <span className="song-preview-artist">{song.artist}</span>
      </span>
    )
  })
    
  return (
    songsPreview
  )
}