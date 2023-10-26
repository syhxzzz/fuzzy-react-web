import React from "react";
import AppHeader from "../../component/app-header";
import AppFooter from "../../component/app-footer";
import HomeSectionV1 from "./component/home-section-v1";
import { HomeWrapper } from "./style";
import HomeBanner from "./component/home-banner";
export default function Home() {
  return (
    <>
      <AppHeader />
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          <HomeSectionV1 infoData={discountInfo} />
        </div>
      </HomeWrapper>
      <AppFooter />
    </>
  );
}
