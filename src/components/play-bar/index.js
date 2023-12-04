import { memo, useRef, useState } from "react";
import { PlayBarWrapper } from "./style";
import { PlayPanel } from "./component/play-panel";
import { useDispatch } from "react-redux";
import {
  changeCurrentLyricIndexAction,
  changePlaySongAction,
} from "@/store/song-store/actionCreators";
import { message } from "antd";

export default memo(function PlayBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const dispatch = useDispatch();
  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      playList: state.getIn(["player", "playList"]),
      playSequence: state.getIn(["player", "playSequence"]),
    }),
    shallowEqual
  );

  const audioRef = useRef();
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    let lrcLength = currentLyrics.length;
    let i = 0;
    for (; i < lrcLength; i++) {
      const lrcTime = currentLyrics[i].time;
      if (currentTime * 1000 < lrcTime) {
        break;
      }
    }
    const finalIndex = i - 1;
    if (finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex));
      message.open({
        content: currentLyrics[finalIndex].content,
        key: "lyric",
        duration: 0,
        className: "lyric-message",
      });
    }
  };

  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changePlaySongAction(1));
    }
  };

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
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {showPanel && <PlayPanel />}
    </PlayBarWrapper>
  );
});
