import { LeftWrapper } from "./style";
import React, { memo } from "react";
import Link from "next/link";
import IconLogo from "@/svg/icon-logo";
const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <Link href="/home">
        <IconLogo />
      </Link>
    </LeftWrapper>
  );
});

HeaderLeft.displayName = "HeaderLeft";
export default HeaderLeft;
