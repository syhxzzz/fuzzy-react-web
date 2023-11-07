import React, { memo } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

import { HeaderWrapper } from "./style";

const ThemeHeaderRCM = memo(function ThemeHeaderRCM(props) {
  const { title, keywords, moreLink, keywordClick } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={() => keywordClick(item)}>
                  {item}
                </span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Link href={moreLink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

ThemeHeaderRCM.defaultProps = {
  keywords: [],
};

ThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

export default ThemeHeaderRCM;
