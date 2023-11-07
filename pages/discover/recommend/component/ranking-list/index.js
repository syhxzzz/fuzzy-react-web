import React, { memo, useEffect } from "react";
import { getTopData } from "../../store/actionCreators";
import { RankingWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TopRanking from "@/components/top-ranking";

export default memo(function RankingList() {
  const dispatch = useDispatch();

  const state = useSelector(
    (state1) => ({
      topUpList: state1.recommend.get("topUpList"),
      topNewList: state1.recommend.get("topNewList"),
      topOriginList: state1.recommend.get("topOriginList"),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTopData(19723756));
    dispatch(getTopData(3779629));
    dispatch(getTopData(2884035));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <TopRanking info={state.topUpList} />
        <TopRanking info={state.topNewList} />
        <TopRanking info={state.topOriginList} />
      </div>
    </RankingWrapper>
  );
});
