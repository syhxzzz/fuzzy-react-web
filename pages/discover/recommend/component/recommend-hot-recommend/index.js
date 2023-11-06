import React, { memo } from "react";
import { RecommendWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
// import useHistory from
export default memo(function HotRecommend() {
  const state = useSelector((state1) => ({
    recommends: state1.recommend.get("hotRecommends"),
  }));
  const dispatch = useDispatch();
  // TODO()
  // const history = useHistory();
  return <RecommendWrapper></RecommendWrapper>;
});
