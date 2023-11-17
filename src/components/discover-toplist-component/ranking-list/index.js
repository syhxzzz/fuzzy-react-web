import { memo, useState, useEffect } from "react";
import { RankingListWrapper } from "./style";
import ThemeHeaderSong from "@/components/theme-header-song/index.js";
import store from "@/store";
import { formatMinuteSecond, getSizeImage } from "@/utils/format-utils";
export default memo(function RankingList() {
  const [playList, setPlayList] = useState({});
  useEffect(() => {
    function updateState() {
      setPlayList(store.getState().toplist.get("playList"));
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, []);
  const tracks = playList.tracks || [];
  return (
    <RankingListWrapper>
      <ThemeHeaderSong
        playCount={playList.playCount}
        trackCount={playList.trackCount}
      />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr className="item" key={item.id}>
                  <td className="ranking-num">
                    <span className="num">{index + 1}</span>
                    <span className="new sprite_icon2"></span>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <picture>
                          <img
                            alt="topSongCover"
                            src={getSizeImage(item.al.picUrl, 50)}
                          />
                        </picture>
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="duration">
                      {formatMinuteSecond(item.dt)}
                    </span>
                    <div className="icon-bar">
                      <a href="/todo" className="add-icon sprite_icon2"></a>
                      <a href="/todo" className="favor-icon sprite_icon2"></a>
                      <a href="/todo" className="share-icon sprite_icon2"></a>
                      <a
                        href="/todo"
                        className="download-icon sprite_icon2"
                      ></a>
                    </div>
                  </td>
                  <td>{item.ar[0].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
});
