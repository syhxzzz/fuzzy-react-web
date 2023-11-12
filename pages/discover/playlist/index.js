import { memo } from "react";
import { PlayListWrapper } from "./style";
import PlaylistHeader from "./component/playlistHeader";
import PlaylistPart from "./component/playlist-part";
import DiscoverHeaderWrapper from "../component/index";
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
