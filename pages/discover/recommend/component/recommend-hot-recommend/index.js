import React, { memo, useCallback, useEffect } from "react";
import { RecommendWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getRecommend } from "../../store/actionCreators";
import ThemeCover from "@/components/theme-cover";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
export default memo(function HotRecommend() {
  const router = useRouter();
  const state = useSelector((state1) => ({
    recommends: state1.recommend.get("hotRecommends"),
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
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
