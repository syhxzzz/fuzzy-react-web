import React, { memo } from "react";
import DiscoverHeaderWrapper from "../component/index";
import RecommendBanner from "./component/recommend-banner";
import {
  RecommendLeft,
  RecommendRight,
  RecommendWraper,
  Content,
} from "./style";
import HotRecommend from "./component/recommend-hot-recommend";
export default memo(function RecommendPage() {
  return (
    <DiscoverHeaderWrapper>
      <RecommendWraper>
        <RecommendBanner />
        <Content className="wrap-v2">
          <RecommendLeft>
            <HotRecommend />
          </RecommendLeft>
          <RecommendRight></RecommendRight>
        </Content>
      </RecommendWraper>
    </DiscoverHeaderWrapper>
  );
});
