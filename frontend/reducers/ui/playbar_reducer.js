import {
  PLAY_SONG,
  PAUSE_SONG,
  RECEIVE_PAGE,
  RECEIVE_NEXT_SONG,
  RECEIVE_PREVIOUS_SONG,
  RECEIVE_LIBRARY_ITEM,
  QUEUE_SONG,
  QUEUE_SONGS,
  END_LOOP_QUEUE,
  END_QUEUE,
  BEGIN_LOOP_FROM_END,
  SHUFFLE_QUEUE,
  UNSHUFFLE_QUEUE
} from "../../actions/playbar_actions";

import { RECEIVE_LIKED_SONGS } from "../../actions/library_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";
import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";

const defaultState = {
  currentSong: null,
  isPlaying: false,
  currentSongIndex: null,
  isShuffled: false,
  shuffleIndex: null,
  // shuffledQueue: array of shuffled indices from currentQueue
  shuffledQueue: [],
  // pageQueue: songId's on a given page in order
  pageQueue: [],
  // currentQueue: songId's that are currently being played
  currentQueue: [],
  currentQueueLocation: null,
  // userQueue: array of songId's added to queue by user
  userQueue: [],
}

const playbarReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case PLAY_SONG:
      newState.currentSong = action.song;
      newState.currentQueue = action.pageQueue;
      newState.currentSongIndex = action.pageIndex;
      if (action.location) {
        newState.currentQueueLocation = action.location;
      } else {
        newState.currentQueueLocation = newState.currentQueueLocation;
      }
      newState.isPlaying = true;
      return newState;
    case PAUSE_SONG:
      newState.isPlaying = false;
      return newState;
    case RECEIVE_PAGE:
      newState.currentSong = action.song;
      newState.currentQueue = action.pageQueue;
      newState.currentQueueLocation = action.location;
      newState.currentSongIndex = 0;
      newState.isPlaying = true;
      return newState;
    case RECEIVE_LIBRARY_ITEM:
      if (action.payload.song) {
        newState.currentSong = action.payload.song
      } else {
        return defaultState;
      }
      newState.currentQueue = action.payload.pageQueue;
      newState.currentQueueLocation = action.payload.itemLocation;
      newState.currentSongIndex = 0;
      newState.isPlaying = true;
      return newState;
    case RECEIVE_NEXT_SONG:
      newState.currentSong = action.song;

      if (newState.isShuffled) {
        newState.shuffleIndex += 1
        newState.currentSongIndex = newState.shuffledQueue[newState.shuffleIndex]
      } else {
        newState.currentSongIndex += 1
      }

      newState.isPlaying = true;
      return newState;
    case RECEIVE_PREVIOUS_SONG:
      newState.currentSong = action.song;

      if (newState.isShuffled) {
        newState.shuffleIndex -= 1
        newState.currentSongIndex = newState.shuffledQueue[newState.shuffleIndex]
      } else {
        newState.currentSongIndex -= 1
      }

      newState.isPlaying = true;
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      newState.pageQueue = action.payload.pageQueue;
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
    case END_LOOP_QUEUE:
      // Used when reaching end of page when looping all songs
      if (newState.isShuffled) {
        newState.shuffleIndex = -1;
        newState.currentSongIndex = newState.shuffledQueue[newState.shuffleIndex];
      } else {
        newState.currentSongIndex = -1;
      }
      return newState;
    case QUEUE_SONG:
      newState.userQueue.push(action.payload.songId);
      return newState;
    case END_QUEUE:
      // Used when reaching end of song queue
      newState.currentSong = null;
      newState.isPlaying = false;
      newState.isShuffled = false;
      newState.currentSongIndex = null;
      newState.shuffleIndex = null;
      newState.currentQueue = action.pageQueue;
      newState.currentQueueLocation = null;
      newState.shuffledQueue = null;
      return newState;
    case BEGIN_LOOP_FROM_END:
      // used when currentQueue is looped and user goes to previous song while on first song of queue,
      if (newState.isShuffled) {
        newState.shuffleIndex = newState.shuffledQueue.length;
      } else {
        newState.currentSongIndex = Object.entries(newState.currentQueue).length;
      }
      return newState;
    case SHUFFLE_QUEUE:
      newState.shuffleIndex = 0;
      newState.isShuffled = true;
      newState.shuffledQueue = action.shuffledQueue;
      return newState;
    case UNSHUFFLE_QUEUE:
      newState.shuffleIndex = null;
      newState.isShuffled = false;
      newState.shuffledQueue = []
      return newState;
    default:
      return state;
  }
}

export default playbarReducer;