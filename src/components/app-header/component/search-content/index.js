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
      console.log(res);
    });
  }, [inputWord]);
  const suggestedSongs = result.songs;
  const suggestedAlbums = result.albums;
  const suggestPlaylists = result.playlists;
  const suggestArtists = result.artists;
  return (
    <SearchContentWrapper>
      {suggestedSongs.map((item) => {
        return <span key={item.name}>{item.name}</span> - <span></span>;
      })}
      {suggestedAlbums.map((item) => {
        return (
          <span key={item.id}>{item.name}</span> -
          <span>{item.artist.name}</span>
        );
      })}
      {inputWord}
    </SearchContentWrapper>
  );
});
