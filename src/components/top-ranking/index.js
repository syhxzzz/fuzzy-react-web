import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { getSongDetailAction } from "@/store/song-store";
import { addSongToPlaylistAction } from "@/store/song-store/actionCreators";
export default memo(function TopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <picture>
            <img src={getSizeImage(info.coverImgUrl)} alt="top-ranking cover" />
          </picture>
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02" />
            <button className="btn favor sprite_02" />
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => playMusic(item)}
                  />
                  <button
                    className="btn sprite_icon2 addTo"
                    onClick={(e) => {
                      dispatch(addSongToPlaylistAction(item.id));
                    }}
                  />
                  <button className="btn sprite_02 favor" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo"> 查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
