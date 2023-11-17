import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { RecommendWrapper } from "./style";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getRecommend } from "../../../store/discover-recommend-store/actionCreators";
import ThemeCover from "@/components/theme-cover";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { createSelector } from "@reduxjs/toolkit";
import store from "@/store";
export default memo(function HotRecommend() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({ recommends: [] });
  const selectB = (state) => state.recommend.get("hotRecommends");
  const stateSelector = createSelector([selectB], (a) => ({ recommends: a }));
  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
  useEffect(() => {
    function updatedState() {
      setState(stateSelector(store.getState()));
    }
    const fun = store.subscribe(updatedState);
    return fun;
  }, [stateSelector]);
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
        {state.recommends.slice(0, 8).map((item, index) => {
          return <ThemeCover info={item} key={item.id} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
