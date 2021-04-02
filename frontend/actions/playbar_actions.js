import * as SongAPIUtil from '../util/song_api_util'

export const PLAY_SONG = "PLAY_SONG";
export const PLAY_PAGE = "PLAY_PAGE";
export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_QUEUE_SONG = "PLAY_QUEUE_SONG";
export const QUEUE_SONG = "QUEUE_SONG";
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const RECEIVE_PREVIOUS_SONG = "RECEIVE_PREVIOUS_SONG";
export const END_LOOP_QUEUE = "LOOP_QUEUE";
export const END_QUEUE = "END_QUEUE";
export const BEGIN_LOOP_FROM_END = "BEGIN_LOOP_FROM_END";

export const playSong = (song, pageIndex, pageQueue, location) => {
  return {
    type: PLAY_SONG,
    song,
    pageIndex,
    pageQueue,
    location
  }
}

export const receiveNextSong = song => {
  return {
    type: RECEIVE_NEXT_SONG,
    song
  }
}

export const receivePrevSong = song => {
  return {
    type: RECEIVE_PREVIOUS_SONG,
    song
  }
}

export const beginLoopFromEnd = currentQueue => {
  return {
    type: BEGIN_LOOP_FROM_END,
    currentQueue
  }
}

export const endLoopQueue = () => {
  return {
    type: END_LOOP_QUEUE
  }
}

export const endQueue = () => {
  return {
    type: END_QUEUE
  }
}

export const fetchNextSong = songId => dispatch => {
  SongAPIUtil.fetchSong(songId)
    .then(song => dispatch(receiveNextSong(song)));
}

export const fetchPrevSong = songId => dispatch => {
  SongAPIUtil.fetchSong(songId)
    .then(song => dispatch(receivePrevSong(song)));
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