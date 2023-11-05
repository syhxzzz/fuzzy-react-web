import React, { memo } from "react";
import DiscoverHeaderWrapper from "../component/index";
import RecommendBanner from "@/components/recommend-banner";
export default memo(function RecommendPage() {
  return (
    <DiscoverHeaderWrapper>
      <RecommendBanner />
    </DiscoverHeaderWrapper>
  );
});
