import { memo } from "react";
import DiscoverHeaderWrapper from "../component/index";
import TopRanking from "./component/top-ranking";
import RankingHeader from "./component/ranking-header";
import RankingList from "./component/ranking-list";
import { TopListWrapper, TopListLeft, TopListRight } from "./style";
export default memo(function TopList() {
  return (
    <DiscoverHeaderWrapper>
      <TopListWrapper>
        <TopListLeft>
          <TopRanking />
        </TopListLeft>
        <TopListRight>
          <RankingHeader />
          <RankingList />
        </TopListRight>
      </TopListWrapper>
    </DiscoverHeaderWrapper>
  );
});
