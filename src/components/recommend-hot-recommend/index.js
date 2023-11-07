import React, { memo, useCallback, useEffect } from "react";
import { RecommendWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getRecommend } from "../../../pages/discover/recommend/store/actionCreators";
// import useHistory from
export default memo(function HotRecommend() {
  const router = useRouter();
  const state = useSelector((state1) => ({
    recommends: state1.recommend.get("hotRecommends"),
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);

  const keywordClick = useCallback(
    (keyword) => {
      router.push({ url: "/discover/songs", cat: keyword });
    },
    [router]
  );

  return <RecommendWrapper></RecommendWrapper>;
});
