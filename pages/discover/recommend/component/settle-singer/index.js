import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import store from "@/store";
import { SetterSingerWrapper } from "./style";
import { getSettleSingers } from "../../store/actionCreators";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { getSizeImage } from "@/utils/format-utils";
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
      <ThemeHeaderSmall title="入驻歌手" more="查看全部 >" />
      <div className="singer-list">
        {state.settleSingers.map((item, index) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <picture>
                <img
                  src={getSizeImage(item.img1v1Url, 62)}
                  alt="singerPicture"
                />
              </picture>
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/todo">申请成为网易音乐人</a>
      </div>
    </SetterSingerWrapper>
  );
});
