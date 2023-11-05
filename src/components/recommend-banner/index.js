import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from "./style";
import { Carousel } from "antd";
import Image from "next/image";
import { getBanner } from "../../../pages/discover/recommend/store/actionCreators";
export default memo(function RecommendBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  // let state;
  const state = useSelector(
    (state1) => ({
      // banner: state.getIn("recommend", "topBanners"),
      // banner: state.get("recommend").get("topBanners"),
      banners: state1.recommend.get("topBanners"),
    }),
    shallowEqual
  );

  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from);
    }, 0);
  }, []);

  const bgImage =
    state.banners[currentIndex] &&
    state.banners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
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
                  <Image
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
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
