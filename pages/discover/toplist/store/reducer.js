import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  playList: { coverImgUrl: "" },
});

export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    default:
      return state;
  }
};
