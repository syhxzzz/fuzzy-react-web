import { memo, useState } from "react";
import { PlayListPartWrapper } from "./style";
import store from "@/store";
import { useDispatch } from "react-redux";
import { getPlaylistList } from "../../store/actionCreators";
import ThemeCover from "@/components/theme-cover";
export default memo(function PlayListPartHeader() {
  const [currentPage, setCurrentPage] = useState(1);
  const categoryPlaylists = store.getState().playlist.get("categoryPlaylist");
  const playlistList = categoryPlaylists.playlists || [];
  const total = categoryPlaylists.total || 0;
  const dispatch = useDispatch();

  function onPageChange(page) {
    setCurrentPage(page);
    dispatch(getPlaylistList(page));
  }
  return (
    <PlayListPartWrapper>
      <div className="playlists-list">
        {playlistList.map((item) => {
          return <ThemeCover key={item.id} info={item} right="30px" />;
        })}
      </div>
    </PlayListPartWrapper>
  );
});
