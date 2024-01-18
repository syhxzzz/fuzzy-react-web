import { useSelector } from "react-redux";
import { PlayPanelWrapper } from "./style";
import classNames from "classnames";
import { formatMinuteSecond } from "@/utils/format-utils";
import { useEffect } from "react";

export const PlayPanel = () => {
  const state = useSelector((state) => ({
    songList: state.song.get("playList"),
    currentSong: state.song.get("currentSong"),
    currentSongIndex: state.song.get("currentSongIndex"),
    currentLyrics: state.song.get("currentLyrics"),
    currentLyricsIndex: state.song.get("currentLyricsIndex"),
  }));

  return (
    <PlayPanelWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="head play-panel-head">
        <h4>
          播放列表<span className="">({state.songList.length})</span>
        </h4>
        <a className="addAll sprite_playlist">
          <span className="sprite_playlist"></span>收藏全部
        </a>
        <span className="line"></span>
        <a className="clear">
          <span className="sprite_playlist"></span>清除
        </a>
        <p className="lyrics">{state.currentSong.name}</p>
        <span className="close sprite_playlist">关闭</span>
      </div>
      <div className="body">
        <ul className="list-content">
          {state.songList.map((item, index) => {
            return (
              <li
                key={item.id}
                className={classNames("item", {
                  active: state.currentSongIndex === index,
                })}
              >
                <div className="left-content">
                  <div className="play-btn sprite_playlist"></div>
                  <div className="name">{item.name}</div>
                </div>
                <div className="right-content">
                  <div className="operate">
                    <a title="收藏" className="collect sprite_playlist"></a>
                    <a title="分享" className="share sprite_playlist"></a>
                    <a title="下载" className="download sprite_playlist"></a>
                    <a title="删除列表" className="delete sprite_playlist"></a>
                  </div>
                  <div className="artist">{item.ar[0].name}</div>
                  <div className="duration">{formatMinuteSecond(item.dt)}</div>
                  <div className="song-info"></div>
                </div>
              </li>
            );
          })}
        </ul>
        <span className="divider"></span>
        <div className="lyrics">
          <ul className="lyrics-content">
            {state.currentLyrics.map((item, index) => {
              return (
                <li
                  key={item.time}
                  className={classNames("lyrics-item", {
                    active: index === state.currentLyricsIndex,
                  })}
                >
                  {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PlayPanelWrapper>
  );
};
