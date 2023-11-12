import { memo, useEffect, useState } from "react";
import { PlayListWrapper } from "./style";
import PlaylistHeader from "./component/playlistHeader";
import PlaylistPart from "./component/playlist-part";
import DiscoverHeaderWrapper from "../component/index";

export default memo(function Playlist() {
  const [currentPage, setCurrentPage] = useState(1);

  const changeCurrentPage = (num) => {
    setCurrentPage(num);
  };

  return (
    <DiscoverHeaderWrapper>
      <PlayListWrapper className="wrap-v2">
        <PlaylistHeader
          changeCurrentPage={changeCurrentPage}
          currentPage={currentPage}
        />
        <PlaylistPart
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
        />
      </PlayListWrapper>
    </DiscoverHeaderWrapper>
  );
});
