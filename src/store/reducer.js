import { combineReducers } from "@reduxjs/toolkit";
import { reducer as recommendReducer } from "./discover-recommend-store";
import { reducer as playlistReducer } from "./discover-playlist-store";
import { reducer as toplistReducer } from "./discover-toplist-store";
export default combineReducers({
  // TODO: 补充其他的 Reducer
  recommend: recommendReducer,
  playlist: playlistReducer,
  toplist: toplistReducer,
});
