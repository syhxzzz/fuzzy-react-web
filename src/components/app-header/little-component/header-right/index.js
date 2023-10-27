import { RightWrapper } from "./style";
import React, { memo } from "react";
import Link from "next/link";
import IconGlobal from "@/svg/icon-global";
import IconProfileAvatar from "@/svg/icon-profile-avatar";
import IconProfileMenu from "@/svg/icon-profile-menu";
const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile">
        <IconProfileMenu />
        <IconProfileAvatar />
      </div>
    </RightWrapper>
  );
});

HeaderRight.displayName = "HeaderRight";
export default HeaderRight;
