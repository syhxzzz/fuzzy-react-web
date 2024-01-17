import { memo } from "react";
import { PlaylistCategoryWrapper } from "./style";
import store from "@/store";
import { useDispatch } from "react-redux";
import {
  changeCurrentCategoryAction,
  getPlaylistList,
} from "../../../store/discover-playlist-store/actionCreators";
import { current } from "@reduxjs/toolkit";
export default memo(function PlaylistCategory(props) {
  const { currentPage, changeCurrentPage } = props;
  const category = store.getState().playlist.get("category");
  const dispatch = useDispatch();
  function selectCategory(name) {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getPlaylistList(0));
  }
  return (
    <PlaylistCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span
          className="link"
          onClick={(e) => {
            selectCategory("全部");
            changeCurrentPage(1);
          }}
        >
          全部风格
        </span>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={"item" + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem) => {
                  return (
                    <div className="item" key={sItem.name}>
                      <span
                        className="link"
                        onClick={(e) => {
                          selectCategory(sItem.name);
                          changeCurrentPage(1);
                        }}
                      >
                        {sItem.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </PlaylistCategoryWrapper>
  );
});
