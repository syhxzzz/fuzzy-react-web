import { LeftWrapper } from "./style";
import React, { memo, useState } from "react";
import Link from "next/link";
import searchTitles from "src/data/search_titles.json";

const HeaderCenter = memo((props) => {
  const [isSearch, handleBarClick] = props;
  const [currentTab, setCurrentTab] = useState(0);
  const titles = searchTitles.map((item) => item.titles);

  return (
    <LeftWrapper>
      <Link href="/home"></Link>
    </LeftWrapper>
  );
});

HeaderCenter.displayName = "HeaderLeft";
export default HeaderCenter;
