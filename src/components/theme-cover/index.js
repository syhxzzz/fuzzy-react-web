import React, { memo } from "react";

import { getCount, getSizeImage } from "@/utils/format-utils";

import { ThemeCoverWrapper } from "./style";

export default memo(function ThemeCover(props) {
  const { info, right } = props;
  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <picture>
          <img
            alt="album-cover"
            src={getSizeImage(info.picUrl || info.coverImgUrl, 140)}
          />
        </picture>
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
    </ThemeCoverWrapper>
  );
});
