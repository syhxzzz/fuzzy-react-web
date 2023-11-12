import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  category: [],
  currentCategory: "全部",
  categoryPlaylist: {},
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category", action.category);
    case actionTypes.CHANGE_CATEGORY_PLAYLISTS:
      return state.set("categoryPlaylist", action.categoryPlaylist);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    default:
      return state;
  }
}
