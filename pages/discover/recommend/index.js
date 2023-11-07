import React, { memo } from "react";
import DiscoverHeaderWrapper from "../component/index";
import RecommendBanner from "./component/recommend-banner";
import {
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
  Content,
} from "./style";
import HotRecommend from "./component/recommend-hot-recommend";
import NewAlbum from "./component/new-album";
import RankingList from "./component/ranking-list";
export default memo(function RecommendPage() {
  return (
    <DiscoverHeaderWrapper>
      <RecommendWrapper>
        <RecommendBanner />
        <Content className="wrap-v2">
          <RecommendLeft>
            <HotRecommend />
            <NewAlbum />
            <RankingList />
          </RecommendLeft>
          <RecommendRight></RecommendRight>
        </Content>
      </RecommendWrapper>
    </DiscoverHeaderWrapper>
  );
});
