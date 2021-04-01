import {
  PLAY_SONG,
  QUEUE_SONG,
  PLAY_QUEUE_SONG
} from "../../actions/playbar_actions";

import { RECEIVE_LIKED_SONGS } from "../../actions/library_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";

const defaultState = {
  currentSong: null,
  isPlaying: false,
  pageQueue: [],
  userQueue: [],
}

const playbarReducer = (state = defaultState, action) => {

  let newState = Object.assign({}, state)
  switch (action.type) {
    case PLAY_SONG:
      newState.currentSong = action.song;
      newState.isPlaying = true;
      return newState;
    case RECEIVE_LIKED_SONGS:
      newState.pageQueue = action.payload.pageQueue; 
      return newState;
    case RECEIVE_PLAYLIST:
      newState.pageQueue = action.payload.pageQueue;
      return newState; 
    case RECEIVE_ARTIST:
      newState.pageQueue = action.payload.pageQueue;
      return newState; 
    case RECEIVE_ALBUM:
      newState.pageQueue = action.payload.pageQueue;
      return newState; 
    case QUEUE_SONG:
      newState.userQueue.push(action.payload.songId);
      return newState;
    default:
      return state;
  }
}

export default playbarReducer;