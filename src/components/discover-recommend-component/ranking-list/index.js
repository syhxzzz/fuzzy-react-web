import React, { memo, useEffect } from "react";
import { getTopData } from "../../../store/discover-recommend-store/actionCreators";
import { RankingWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TopRanking from "@/components/top-ranking";
import store from "@/store";
export default memo(function RankingList() {
  const dispatch = useDispatch();

  const state1 = useSelector(
    (state) => ({
      topUpList: state.recommend.get("topUpList"),
      topNewList: state.recommend.get("topNewList"),
      topOriginList: state.recommend.get("topOriginList"),
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
        <TopRanking info={state1.topUpList} />
        <TopRanking info={state1.topNewList} />
        <TopRanking info={state1.topOriginList} />
      </div>
    </RankingWrapper>
  );
});
