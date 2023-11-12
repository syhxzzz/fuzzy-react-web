import { memo, useState, useEffect } from "react";
import { PlayListPartWrapper } from "./style";
import store from "@/store";
import { useDispatch } from "react-redux";
import { getPlaylistList } from "../../store/actionCreators";
import ThemeCover from "@/components/theme-cover";
import Pagination from "@/components/Pagination";
import { PER_PAGE_NUMBER } from "../../store/constants";
export default memo(function PlayListPartHeader() {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryPlaylists, setCategoryPlaylists] = useState({
    playlistList: [],
    total: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylistList(0));
  }, [dispatch]);

  useEffect(() => {
    function updatePageWhenCategoryChange() {
      setCurrentPage(1);
    }
    const fun = store.subscribe(updatePageWhenCategoryChange);
    return fun;
  }, []);

  useEffect(() => {
    function updateState() {
      setCategoryPlaylists({
        playlistList:
          store.getState().playlist.get("categoryPlaylist").playlists || [],
        total: store.getState().playlist.get("categoryPlaylist").total || 0,
      });
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, []);

  function onPageChange(page) {
    setCurrentPage(page);
    dispatch(getPlaylistList(page));
  }
  return (
    <PlayListPartWrapper>
      <div className="playlists-list">
        {categoryPlaylists.playlistList.map((item) => {
          return <ThemeCover key={item.id} info={item} right="30px" />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        total={categoryPlaylists.total}
        pageSize={PER_PAGE_NUMBER}
      />
    </PlayListPartWrapper>
  );
});
