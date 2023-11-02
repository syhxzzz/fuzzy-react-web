import React, { memo } from "react";
import Router from "next/router";
import Layout1 from "@/components/Layout1";
import { DiscoverWrapper } from "./style";
import { discoverMenu } from "@/data/local-data.js";
import Link from "next/link";
export default memo(function Discover() {
  let a = 11;
  return (
    <DiscoverWrapper>
      <div className="top">
        {discoverMenu.map((item) => {
          return (
            <div className="title" key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </DiscoverWrapper>
  );
});
