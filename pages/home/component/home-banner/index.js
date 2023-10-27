import React, { memo } from "react";
import { BannerWrapper } from "./style";
const HomeBanner = memo((infoData) => {
  return (
    <BannerWrapper>
      <div>111</div>
    </BannerWrapper>
  );
});
HomeBanner.displayName = "HomeBanner";
export default HomeBanner;
