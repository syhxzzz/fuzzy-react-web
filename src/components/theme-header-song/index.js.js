import { memo } from "react";
import { ThemeHeaderSongWrapper } from "./style";
export default memo(function ThemeHeaderSong(props) {
  const { playCount, trackCount } = props;
  return (
    <ThemeHeaderSongWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{trackCount} 首歌</div>
      </div>
      <div className="right">
        <span>
          播放：<span className="count">{playCount}</span>次
        </span>
      </div>
    </ThemeHeaderSongWrapper>
  );
});
