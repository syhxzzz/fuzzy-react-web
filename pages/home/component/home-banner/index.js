import React, { memo, Suspense } from "react";
import { BannerWrapper } from "./style";

const HomeBanner = memo(() => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BannerWrapper>
          <div className="cover"></div>
        </BannerWrapper>
      </Suspense>
    </div>
  );
});
HomeBanner.displayName = "HomeBanner";
export default HomeBanner;
