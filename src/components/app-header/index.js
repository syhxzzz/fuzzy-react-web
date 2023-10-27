import React, { memo, useRef, useState } from "react";
import useScrollPostion from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";
import { HeaderWrapper, SearchAreaPlaceholder } from "./style";
import HeaderLeft from "./little-component/header-left";
import HeaderRight from "./little-component/header-right";
const AppHeader = memo((props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);

  const { scrollY } = useScrollPostion();

  if (scrollY == 0 && !isSearch) {
    setIsSearch(true);
    setIsAlpha(true);
  }

  if (isAlpha && isSearch && scrollY > 0) {
    setIsAlpha(false);
    setIsSearch(false);
  }

  function handleBarClick() {
    setIsSearch(true);
  }

  const prevY = useRef(0);
  if (!isSearch) {
    prevY.current = scrollY;
  }
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) {
    setIsSearch(false);
  }
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderRight />
          </div>
        </div>
      </HeaderWrapper>
    </ThemeProvider>
  );
});
AppHeader.displayName = "AppHeader";
export default AppHeader;
