import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import { fetchPlaylistSongs } from "./actions/song_actions"
// import { fetchPlaylist, fetchPlaylists, createPlaylist, updatePlaylist, deletePlaylist, addSong, removeSong } from "./util/playlist_api_util"

// const playlist1 = {
//   user_id: 1,
//   name: "Second Playlist",
//   private: false,
//   description: nil
// }

// const updatedPlaylist1 = {
//   id: 1,
//   user_id: 1,
//   name: "I'VE UPDATED!",
//   private: false,
//   description: "This wasn't here before .__."
// }

document.addEventListener("DOMContentLoaded", () => {
  // TESTING START
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.store = store;


  // window.fetchPlaylist = fetchPlaylist;
  // window.fetchPlaylists = fetchPlaylists;
  // window.createPlaylist = createPlaylist;
  // window.updatePlaylist = updatePlaylist;
  // window.deletePlaylist = deletePlaylist;
  // window.addSong = addSong;
  // window.removeSong = removeSong;
  // window.fetchPlaylistSongs = fetchPlaylistSongs;
  // TESTING END
  
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});