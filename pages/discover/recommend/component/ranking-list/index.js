import React, { memo, useEffect, useState } from "react";
import { getTopData } from "../../store/actionCreators";
import { RankingWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch } from "react-redux";
import TopRanking from "@/components/top-ranking";
import { select } from "underscore";
import { createSelector } from "@reduxjs/toolkit";
import store from "@/store";
export default memo(function RankingList() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    topUpList: {},
    topNewList: {},
    topOriginList: {},
  });
  const state1 = store.getState();
  const selectA = (state1) => state1.recommend.get("topUpList");
  const selectB = (state1) => state1.recommend.get("topNewList");
  const selectC = (state1) => state1.recommend.get("topOriginList");
  const stateSelector = createSelector(
    [selectA, selectB, selectC],
    (a, b, c) => ({
      topUpList: a,
      topNewList: b,
      topOriginList: c,
    })
  );
  useEffect(() => {
    setState(stateSelector(state1));
  }, [state1, stateSelector]);

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
