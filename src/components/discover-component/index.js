import React, { memo } from "react";
import { DiscoverWrapper, TopMenu } from "./style";
import { discoverMenu } from "@/services/local-data.js";
import Link from "next/link";
export default memo(function DiscoverHeaderWrapper({ children }) {
  return (
    <div>
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
      {children}
    </div>
  );
});
