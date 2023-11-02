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
          <TopMenu className="discover-header">
            {discoverMenu.map((item) => {
              return (
                <div className="title" key={item.title}>
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
