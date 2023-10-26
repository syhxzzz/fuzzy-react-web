import React, { useState, memo } from "react";
const AppHeader = memo((infoData) => {
  const [isAlpha, setIsAlpha] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <>
      <div>
        {isAlpha} {isSearch}
      </div>
    </>
  );
});
AppHeader.displayName = "AppHeader";
export default AppHeader;
