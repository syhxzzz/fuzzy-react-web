import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import store from "@/store";
import { SetterSingerWrapper } from "./style";
import { getSettleSingers } from "../../store/actionCreators";
import ThemeHeaderSmall from "@/components/theme-header-small";
export default memo(function SettleSinger() {
  const [state, setState] = useState({ settleSingers: [] });
  const dispatch = useDispatch();
  const select = (state1) => state1.recommend.get("settleSingers");
  const stateSelector = createSelector([select], (a) => ({
    settleSingers: a,
  }));
  useEffect(() => {
    function updateState() {
      setState(stateSelector(store.getState()));
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, [stateSelector]);
  useEffect(() => {
    dispatch(getSettleSingers());
  }, [dispatch]);
  return (
    <SetterSingerWrapper>
      <ThemeHeaderSmall />
      <div className="singer-list">
        {state.settleSingers.map((item, index) => {
          return <></>;
        })}
      </div>
    </SetterSingerWrapper>
  );
});
