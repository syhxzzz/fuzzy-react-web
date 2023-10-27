import React, { Suspense, memo } from "react";
import { BannerWrapper } from "./style";
const HomeBanner = memo((infoData) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BannerWrapper>
          <div>111</div>
        </BannerWrapper>
      </Suspense>
    </div>
  );
});
HomeBanner.displayName = "HomeBanner";
export default HomeBanner;
