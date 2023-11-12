import { memo, useState, useEffect } from "react";
import { PlayListHeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import PlaylistCategory from "./component/playlistCategory";
import { current } from "@reduxjs/toolkit";
import store from "@/store";
import { useDispatch } from "react-redux";
import { getCategory } from "../../store/actionCreators";

export default memo(function PlayListHeader() {
  const [showCategory, setShowCategory] = useState(false);
  const currentCategory = store.getState().playlist.get("currentCategory");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <PlayListHeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button
          className="select"
          onClick={() => {
            setShowCategory(!showCategory);
            console.log(11);
          }}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
      </HeaderLeft>
      {showCategory && <PlaylistCategory></PlaylistCategory>}
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </PlayListHeaderWrapper>
  );
});
