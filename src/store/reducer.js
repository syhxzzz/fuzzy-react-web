import { combineReducers } from "@reduxjs/toolkit";
import { reducer as recommendReducer } from "../../pages/discover/recommend/store";

export default combineReducers({
  // TODO: 补充其他的 Reducer
  recommend: recommendReducer,
});
