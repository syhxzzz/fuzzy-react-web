import { memo, useEffect } from "react";
import DiscoverHeaderWrapper from "../component/index";
import TopRanking from "./component/top-ranking";
import RankingHeader from "./component/ranking-header";
import RankingList from "./component/ranking-list";
import { TopListWrapper, TopListLeft, TopListRight } from "./style";
import { getTops } from "./store/actionCreators";
import { useDispatch } from "react-redux";
import UserComment from "./component/user-comment";
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
