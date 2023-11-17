import { memo, useState, useEffect } from "react";
import { PlayListHeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import PlaylistCategory from "../playlist-category";
import store from "@/store";
import { useDispatch } from "react-redux";
import { getCategory } from "../../../store/discover-playlist-store/actionCreators";

export default memo(function PlayListHeader(props) {
  const { currentPage, changeCurrentPage } = props;
  const [showCategory, setShowCategory] = useState(false);
  const currentCategory = store.getState().playlist.get("currentCategory");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  useEffect(() => {
    document.addEventListener("click", () => {
      setShowCategory(false);
    });
  }, []);
  return (
    <PlayListHeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button
          className="select"
          onClick={(e) => {
            e.stopPropagation();
            setShowCategory(!showCategory);
          }}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
      </HeaderLeft>
      {showCategory && (
        <PlaylistCategory
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
      )}
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </PlayListHeaderWrapper>
  );
});
