import { memo, useEffect, useState } from "react";
import { RankingHeaderWrapper } from "./style";
import store from "@/store";
import { formatMonthDay } from "@/utils/format-utils";
import SongOperationBar from "@/components/song-operation-bar";
export default memo(function RankingHeader() {
  const [topInfo, setTopInfo] = useState({ coverImgUrl: "" });
  useEffect(() => {
    function updateState() {
      setTopInfo(store.getState().toplist.get("playList"));
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, []);
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <picture>
          <img alt="封面图片" src={topInfo.coverImgUrl} />
        </picture>
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">(每日更新)</div>
        </div>
        <SongOperationBar
          favorTitle={`(${topInfo.subscribedCount})`}
          shareTitle={`(${topInfo.shareCount})`}
          downloadTitle={`下载`}
          commentTitle={`${topInfo.commentCount}`}
        />
      </div>
    </RankingHeaderWrapper>
  );
});
