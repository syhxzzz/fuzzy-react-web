import { memo, useEffect, useState } from "react";
import PlaylistHeader from "../../../src/components/discover-playlist-component/playlistHeader";
import PlaylistPart from "../../../src/components/discover-playlist-component/playlist-part";
import DiscoverHeaderWrapper from "../../../src/components/discover-component/index";
import styled from "styled-components";

const PlayListWrapper = styled.div`
  padding: 40px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`;

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
