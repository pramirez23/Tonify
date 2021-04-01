import * as SongAPIUtil from '../util/song_api_util'

export const PLAY_SONG = "PLAY_SONG";
export const PLAY_PAGE = "PLAY_PAGE";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_QUEUE_SONG = "PLAY_QUEUE_SONG";
export const QUEUE_SONG = "QUEUE_SONG";

export const playSong = (song, pageIndex, pageQueue) => {
  return {
    type: PLAY_SONG,
    song,
    pageIndex,
    pageQueue
  }
}

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  }
}

export const playPage = (song, pageQueue) => {
  return {
    type: PLAY_PAGE,
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

export const fetchQueueSong = songId => dispatch =>
  SongAPIUtil.fetchSong(songId)
    .then((song) => dispatch(playQueueSong(song)));