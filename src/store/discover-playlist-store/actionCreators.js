import * as actionTypes from "./constants";
import { PER_PAGE_NUMBER } from "./constants";
import {
  getPlaylistCategory,
  getPlaylistCategoryList,
} from "@/services/playlist";
import { handlePlaylistCategory } from "@/utils/handle-data";

//将获得的所有歌单类型同步
const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res,
});

export const changeCurrentCategoryAction = (category) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: category,
});

// 改变当前类型歌单推荐
const changePlaylistCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_PLAYLISTS,
  categoryPlaylist: res,
});

export const getCategory = () => {
  return (dispatch) => {
    getPlaylistCategory().then((res) => {
      const categoryData = handlePlaylistCategory(res);
      dispatch(changeCategoryAction(categoryData));
    });
  };
};

export const getPlaylistList = (page) => {
  return (dispatch, getState) => {
    const name = getState().playlist.get("currentCategory");
    getPlaylistCategoryList(name, page * PER_PAGE_NUMBER).then((res) => {
      dispatch(changePlaylistCategoryAction(res));
    });
  };
};
