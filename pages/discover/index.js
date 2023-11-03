import React, { memo } from "react";
import { DiscoverWrapper, TopMenu } from "./style";
import { discoverMenu } from "@/data/local-data.js";
import Link from "next/link";
import AppLayout from "@/components/app-layout";
export default memo(function Discover() {
  return (
    <AppLayout>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {discoverMenu.map((item) => {
              return (
                <div className="item" key={item.title}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              );
            })}
          </TopMenu>
        </div>
      </DiscoverWrapper>
    </AppLayout>
  );
});
