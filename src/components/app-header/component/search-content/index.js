import { memo, useEffect, useRef, useState } from "react";
import { SearchContentWrapper } from "./style";
import { getSearchContent } from "@/services/search";
export default memo(function SearchContent(props) {
  const { inputWord } = props;
  const [result, setResult] = useState({
    songs: [],
    albums: [],
    playlists: [],
    artists: [],
  });
  useEffect(() => {
    getSearchContent(inputWord).then((res) => {
      setResult(res.result);
    });
  }, [inputWord]);
  const suggestedSongs = result.songs || [];
  const suggestedAlbums = result.albums || [];
  const suggestPlaylists = result.playlists || [];
  const suggestArtists = result.artists || [];

  return (
    <SearchContentWrapper>
      <div className="suggest-user">
        搜&quot;{inputWord}&quot;相关的用户 &gt;
      </div>

      <div className="song-part">
        {suggestedSongs == false ? null : (
          <div className="song-icon sprite_icon2"> 单曲</div>
        )}
        <div className="song-list">
          {suggestedSongs.map((item, index) => {
            return (
              <div className="song item" key={item.name + `${index}`}>
                <span>{item.name}</span>
                {`-`}
                <span>{item.artists[0].name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="artist-part">
        {suggestArtists == false ? null : (
          <div className="artist-icon sprite_icon2">歌手</div>
        )}
        <div className="artist-list">
          {suggestArtists.map((item, index) => {
            return (
              <div className="artist item" key={item.name + `${index}`}>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="album-part">
        {suggestedAlbums == false ? null : (
          <div className="album-icon sprite_icon2">专辑</div>
        )}
        <div className="album-list">
          {suggestedAlbums.map((item, index) => {
            return (
              <div key={item.id + `${index}`}>
                <span>{item.name}</span>
                {`-`}
                <span>{item.artist.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="playlist-part">
        {suggestPlaylists == false ? null : (
          <div className="playlist-icon sprite_icon2">歌单</div>
        )}
        <div className="playlist-list">
          {suggestPlaylists.map((item, index) => {
            return (
              <span className="item playlist" key={item.name + `${index}`}>
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </SearchContentWrapper>
  );
});
