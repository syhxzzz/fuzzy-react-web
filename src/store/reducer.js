import { combineReducers } from "@reduxjs/toolkit";
import { reducer as recommendReducer } from "../../pages/discover/recommend/store";
import { reducer as playlistReducer } from "../../pages/discover/playlist/store";
import { reducer as toplistReducer } from "../../pages/discover/toplist/store";
export default combineReducers({
  // TODO: 补充其他的 Reducer
  recommend: recommendReducer,
  playlist: playlistReducer,
  toplist: toplistReducer,
});
