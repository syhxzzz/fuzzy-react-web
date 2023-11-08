import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BannerWrapper,
  BannerControl,
  BannerLeft,
  BannerRight,
} from "./style.js";
import { Carousel } from "antd";
import { getBanner } from "../../store/actionCreators";
import store from "@/store/index.js";
import { createSelector } from "@reduxjs/toolkit";
export default memo(function RecommendBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState({ banners: [] });
  const dispatch = useDispatch();
  const select = (state1) => state1.recommend.get("topBanners");
  const stateSelector = createSelector([select], (a) => ({
    banners: a,
  }));
  useEffect(() => {
    function updateState() {
      setState(stateSelector(store.getState()));
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, [stateSelector]);

  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from);
    }, 0);
  }, []);

  const bgimage =
    state.banners &&
    state.banners[currentIndex] &&
    `${state.banners[currentIndex].imageUrl}?imageView&blur=40x20`;

  return (
    <BannerWrapper $bgimage={bgimage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            beforeChange={bannerChange}
            ref={bannerRef}
          >
            {state.banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <picture>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </picture>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
