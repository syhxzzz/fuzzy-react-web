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
      <div className="search-content">
        {suggestedSongs == false ? null : (
          <div className="song-part">
            <div className="left">
              <div className="song-icon sprite_icon2"></div>
              <span className="search-title">单曲</span>
            </div>
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
        )}

        {suggestArtists == false ? null : (
          <div className="artist-part">
            <div className="left">
              <div className="artist-icon sprite_icon2"></div>
              <span className="search-title">歌手</span>
            </div>
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
        )}

        {suggestedAlbums == false ? null : (
          <div className="album-part">
            <div className="left">
              <div className="album-icon sprite_icon2"></div>
              <span className="search-title">专辑</span>
            </div>
            <div className="album-list">
              {suggestedAlbums.map((item, index) => {
                return (
                  <div key={item.id + `${index}`} className="album item">
                    <span>{item.name}</span>
                    {`-`}
                    <span>{item.artist.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {suggestPlaylists == false ? null : (
          <div className="playlist-part">
            <div className="left">
              <div className="playlist-icon sprite_icon2"></div>
              <span className="search-title">歌单</span>
            </div>
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
        )}
      </div>
    </SearchContentWrapper>
  );
});
