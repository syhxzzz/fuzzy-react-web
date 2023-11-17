import React, { useEffect, useRef, memo, useState } from "react";
import { Carousel } from "antd";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { getAlbum } from "../../../store/discover-recommend-store/actionCreators";
import { useDispatch } from "react-redux";
import { AlbumWrapper } from "./style";
import AlbumCover from "@/components/album-cover";
import store from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export default memo(function NewAlbum(props) {
  const [state, setState] = useState({ newAlbum: [] });
  const dispatch = useDispatch();
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);
  const state1 = store.getState();
  const selectNewAlbum = (state1) => state1.recommend.get("newAlbum");
  const stateSelector = createSelector([selectNewAlbum], (a) => ({
    newAlbum: a,
  }));
  useEffect(() => {
    function updatedState() {
      setState(stateSelector(store.getState()));
    }
    const fun = store.subscribe(updatedState);
    return fun;
  }, [stateSelector]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        />
        <div className="album">
          <Carousel ref={carouselRef} dotPosition={false}>
            {[0, 1, 2].map((item) => {
              return (
                <div key={item} className="page">
                  {state.newAlbum
                    .slice(item * 5, 5 * (item + 1))
                    .map((item) => {
                      return <AlbumCover key={item.id} info={item} />;
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        />
      </div>
    </AlbumWrapper>
  );
});
