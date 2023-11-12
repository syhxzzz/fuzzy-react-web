import { memo, useEffect } from "react";
import { PlayListWrapper } from "./style";
import PlaylistHeader from "./component/playlistHeader";
import PlaylistPart from "./component/playlist-part";
import DiscoverHeaderWrapper from "../component/index";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCategory, getPlaylistList } from "./store/actionCreators";
export default memo(function Playlist() {
  return (
    <DiscoverHeaderWrapper>
      <PlayListWrapper className="wrap-v2">
        <PlaylistHeader />
        <PlaylistPart />
      </PlayListWrapper>
    </DiscoverHeaderWrapper>
  );
});
