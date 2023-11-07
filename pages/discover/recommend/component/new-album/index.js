import React, { useEffect, useRef, memo } from "react";
import { Carousel } from "antd";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { getAlbum } from "../../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { AlbumWrapper } from "./style";
import AlbumCover from "@/components/album-cover";
export default memo(function NewAlbum(props) {
  const state = useSelector((state1) => ({
    newAlbum: state1.recommend.get("newAlbum"),
  }));
  const dispatch = useDispatch();
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);
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
