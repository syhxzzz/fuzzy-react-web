import { memo } from "react";
import { PlayBarWrapper } from "./style";

export default memo(function PlayBar(props) {
  //   const [songInfo] = { props };
  return (
    <PlayBarWrapper>
      {/* <div className="content"> */}
      <div className="play-button">
        <a className="prev-btn">上一首</a>
        <a className="play-btn">上一首</a>
        <a className="next-btn">上一首</a>
      </div>
      <a className="head-cover">
        <picture>
          <img alt="" src="" />
        </picture>
      </a>
      <div className="play">
        <div className="progress-bar"></div>
      </div>
      <div className="operation"></div>
      <div className="control"></div>
      {/* </div> */}
    </PlayBarWrapper>
  );
});
