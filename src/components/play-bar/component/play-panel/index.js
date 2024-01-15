import { useSelector } from "react-redux";
import { PlayPanelWrapper } from "./style";

export const PlayPanel = () => {
  const state = useSelector((state) => ({
    songList: state.song.get("playList"),
    currentSong: state.song.get("currentSong"),
  }));
  return (
    <PlayPanelWrapper>
      <div className="head play-panel-head">
        <h4>
          播放列表<span className="">({state.songList.length})</span>
        </h4>
        <a className="addAll">收藏全部</a>
        <span className="line"></span>
        <a className="clear">清除</a>
        <p className="lyrics">{state.currentSong.name}</p>
        <span className="close sprite_playlist">关闭</span>
      </div>
      <div className="body">
        <div className="list-content">
          {state.songList.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
        <div className="lyrics"></div>
      </div>
    </PlayPanelWrapper>
  );
};
