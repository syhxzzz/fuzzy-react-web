import { memo } from "react";
import { HotRadioWrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { hotRadios } from "@/services/local-data";
export default memo(function HotRadio() {
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.name}>
              <a href="/todo/" className="image">
                <picture>
                  <img alt={item.name} src={item.picUrl} />
                </picture>
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
