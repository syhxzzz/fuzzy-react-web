import React, { memo } from "react";
import DiscoverHeaderWrapper from "../../../src/components/discover-component/index";
import RecommendBanner from "../../../src/components/discover-recommend-component/recommend-banner";

import HotRecommend from "../../../src/components/discover-recommend-component/recommend-hot-recommend";
import NewAlbum from "../../../src/components/discover-recommend-component/new-album";
import RankingList from "../../../src/components/discover-recommend-component/ranking-list";
import UserLogin from "../../../src/components/discover-recommend-component/user-login";
import SettleSinger from "../../../src/components/discover-recommend-component/settle-singer";
import HotRadio from "../../../src/components/discover-recommend-component/hot-radio";

import styled from "styled-components";

const RecommendWrapper = styled.div``;

const Content = styled.div`
  background-color: #fff;
  display: flex;
`;

const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`;

const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`;

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
          <RecommendRight>
            <UserLogin />
            <SettleSinger />
            <HotRadio />
          </RecommendRight>
        </Content>
      </RecommendWrapper>
    </DiscoverHeaderWrapper>
  );
});
