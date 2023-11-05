import * as actionTypes from "./constants";

import {
  getTopBanner,
  getTopList,
  getArtistList,
  getHotRecommend,
  getNewAlbum,
} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  banners: res.banners,
});

export const getBanner = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};
