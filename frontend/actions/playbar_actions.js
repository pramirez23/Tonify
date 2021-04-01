import * as SongAPIUtil from '../util/song_api_util'

export const PLAY_SONG = "PLAY_SONG";
export const PLAY_QUEUE_SONG = "PLAY_QUEUE_SONG";
export const QUEUE_SONG = "QUEUE_SONG";

export const playSong = (song, pageQueue) => {
  return {
    type: PLAY_SONG,
    song,
    pageQueue
  }
}

export const queueSong = songId => {
  return {
    type: QUEUE_SONG,
    songId
  }
}

export const playQueueSong = song => {
  return {
    type: PLAY_QUEUE_SONG,
    song
  }
}

export const fetchQueuesong = songId => dispatch =>
  SongAPIUtil.fetchsong(songId)
    .then((song) => dispatch(playQueueSong(song)));