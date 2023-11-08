import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { RecommendWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getRecommend } from "../../store/actionCreators";
import ThemeCover from "@/components/theme-cover";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { createSelector } from "@reduxjs/toolkit";
import store from "@/store";
export default memo(function HotRecommend() {
  const router = useRouter();
  // const selectA = (state1) => ({
  //   recommends: state1.recommend.get("hotRecommends"),
  // });
  // const state = createSelector([selectA], (state) => state);

  const dispatch = useDispatch();
  const state1 = store.getState();
  const [state2, setState2] = useState({ recommends: [] });
  const selectB = (state) => state.recommend.get("hotRecommends");
  const stateSelector = createSelector([selectB], (a) => ({ recommends: a }));
  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
  useEffect(() => {
    setState2(stateSelector(state1));
  }, [state1, stateSelector]);

  //TODO(): if error, try next one
  // const selectB = (state) => state.recommend.get("hotRecommends");
  // const stateSelector = createSelector([selectB], (a) => ({ recommends: a }));
  // let state2 = stateSelector(state1);
  const state = useSelector((state1) => ({
    recommends: state1.recommend.get("hotRecommends"),
  }));

  // TODO(): still some bug on keywordClick,
  // plan to fix it after recommend/album page was finished
  const keywordClick = useCallback(
    (keyword) => {
      router.push({ url: "/discover/songs", cat: keyword });
    },
    [router]
  );

  return (
    <RecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
        keywordClick={keywordClick}
      />
      <div className="recommend-list">
        {state2.recommends.slice(0, 8).map((item, index) => {
          return <ThemeCover info={item} key={item.id} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
