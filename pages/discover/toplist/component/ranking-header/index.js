import { memo, useEffect, useState } from "react";
import { RankingHeaderWrapper } from "./style";
import store from "@/store";
export default memo(function RankingHeader() {
  const [topInfo, setTopInfo] = useState({});
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
          {/* <img alt="封面图片" src={topInfo.coverImgUrl} /> */}
        </picture>
        <span className="image_cover">封面</span>
      </div>
    </RankingHeaderWrapper>
  );
});
