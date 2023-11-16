import { memo, useEffect, useState } from "react";
import { TopRankingWrapper } from "./style";
import store from "@/store";
import { useDispatch } from "react-redux";
import { getRanking, changeCurrentIndex } from "../../store/actionCreators";
import { getSizeImage } from "@/utils/format-utils";
import classNames from "classnames";
export default memo(function TopRanking() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topList, setTopList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    function updateState() {
      setCurrentIndex(store.getState().toplist.get("currentIndex"));
      setTopList(store.getState().toplist.get("topList"));
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, []);

  const handleItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndex].id;
    dispatch(getRanking(id));
  };
  const id = topList[currentIndex] && topList[currentIndex].id;
  if (!id) return;
  dispatch(getRanking(id));
  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header;
        if (index == 0 || index == 4) {
          header = (
            <div key="header" className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => handleItemClick(index)}
            >
              <picture>
                <img
                  alt="rankingCover"
                  src={getSizeImage(item.coverImgUrl, 40)}
                />
              </picture>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
});
