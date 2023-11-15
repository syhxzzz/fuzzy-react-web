import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import classnames from "classnames";

import { headerLinks } from "@/services/local-data";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { AppHeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import SearchContent from "./component/search-content";

export default memo(function HYAppHeader() {
  const [inputWord, setInputWord] = useState("");
  const [clickSearch, setClickSearch] = useState(false);
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <Link href={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </Link>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };

  function handleInputChange(e) {
    let nextInput = e.target.value;
    setInputWord(nextInput);
    console.log(nextInput);
  }

  useEffect(() => {
    document.addEventListener("click", () => {
      setClickSearch(false);
    });
  }, []);

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <Link className="logo sprite_01" href="#/" />
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className={classnames("select-item")} key={item.title}>
                  {showItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            value={inputWord}
            onChange={(e) => handleInputChange(e)}
            onClick={(e) => {
              setClickSearch(true);
              e.stopPropagation();
              console.log("clickSearch is true");
            }}
          />
          {clickSearch && inputWord != "" && (
            <SearchContent inputWord={inputWord} />
          )}
          <div className="center">
            <a style={{ color: "white", textDecoration: "none" }}>创作者中心</a>
          </div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
});
