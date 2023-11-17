import { memo, useEffect } from "react";
import DiscoverHeaderWrapper from "../../../src/components/discover-component/index";
import TopRanking from "../../../src/components/discover-toplist-component/top-ranking";
import RankingHeader from "../../../src/components/discover-toplist-component/ranking-header";
import RankingList from "../../../src/components/discover-toplist-component/ranking-list";
// import { TopListWrapper, TopListLeft, TopListRight } from "./style";
import { getTops } from "../../../src/store/discover-toplist-store/actionCreators";
import { useDispatch } from "react-redux";
import UserComment from "../../../src/components/discover-toplist-component/user-comment";

import styled from "styled-components";

const TopListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const TopListLeft = styled.div`
  width: 240px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`;
const TopListRight = styled.div`
  width: 740px;
  border: 1px solid #d3d3d3;
  background-color: #fafafa;
`;

export default memo(function TopList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);
  return (
    <DiscoverHeaderWrapper>
      <TopListWrapper>
        <TopListLeft>
          <TopRanking />
        </TopListLeft>
        <TopListRight>
          <RankingHeader />
          <RankingList />
          <UserComment />
        </TopListRight>
      </TopListWrapper>
    </DiscoverHeaderWrapper>
  );
});
