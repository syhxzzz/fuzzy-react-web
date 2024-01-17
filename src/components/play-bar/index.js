import { memo, useCallback, useEffect, useRef, useState } from "react";
import { PlayBarWrapper } from "./style";
import { PlayPanel } from "./component/play-panel";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentLyricIndexAction,
  changePlaySongAction,
  getSongDetailAction,
} from "@/store/song-store/actionCreators";
import { message } from "antd";
import store from "@/store";
import { getPlayUrl, formatMinuteSecond } from "@/utils/format-utils";
import { Map } from "immutable";
import { Slider } from "antd";
export default memo(function PlayBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.song);

  const currentSong = state.get("currentSong");
  const currentLyrics = state.get("currentLyrics");
  const currentLyricsIndex = state.get("currentLyricsIndex");
  const playList = state.get("playList");
  const playSequence = state.get("playSequence");

  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    async function setAudioUrl() {
      audioRef.current.src = await getPlayUrl(currentSong.id);
      audioRef.current
        .play()
        .then((res) => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
        });
      setDuration(currentSong.dt);
    }
    setAudioUrl();
  }, [currentSong]);

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
    if (finalIndex !== currentLyricsIndex) {
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

  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false);
        });
  }, [isPlaying]);

  const sliderChange = useCallback(
    (value) => {
      setProgress(value);
      const time = ((value / 100.0) * duration) / 1000;
      setCurrentTime(time);
      setIsChanging(true);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100.0) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsChanging(false);

      if (!isPlaying) {
        play();
      }
    },
    [duration, isPlaying, play]
  );

  return (
    <PlayBarWrapper>
      <div className="play-button">
        <a
          className="prev-btn sprite_playbar"
          onClick={(e) => dispatch(changePlaySongAction(-1))}
        ></a>
        <div
          className={`sprite_playbar ${
            isPlaying ? "now-playing" : "now-stopping"
          }`}
          onClick={(e) => play()}
        ></div>
        <a
          className="next-btn sprite_playbar"
          onClick={(e) => dispatch(changePlaySongAction(1))}
        ></a>
      </div>
      <a className="head-cover">
        <picture>
          <img alt="" src={currentSong.al.picUrl} />
        </picture>
      </a>
      <div className="play">
        <div className="song-info">
          <div className="song-name">{currentSong.name}</div>
          <div className="song-singer">{currentSong.ar[0].name}</div>
        </div>
        <div className="progress-bar">
          <div className="slider">
            <Slider
              value={progress}
              onChange={sliderChange}
              onAfterChange={sliderAfterChange}
            />
          </div>
          <div className="time">
            <span className="now-time">
              {formatMinuteSecond(currentTime * 1000)}
            </span>
            <span className="divider">/</span>
            <span className="total-time">{formatMinuteSecond(duration)}</span>
          </div>
        </div>
      </div>
      <div className="operation">
        <a className="sprite_lyrics lyrics" title="画中画歌词"></a>
        <a className="sprite_playbar collect" title="收藏"></a>
        <a className="sprite_playbar share" title="分享"></a>
      </div>
      <div className="control">
        <a className="sprite_playbar volume" title="音量"></a>
        <a className="sprite_playbar loop" title="循环"></a>
        <a
          className="sprite_playbar list"
          title="播放列表"
          onClick={(e) => {
            setShowPanel(!showPanel);
          }}
        >
          1
        </a>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {/* <div></div> */}
      {showPanel && <PlayPanel />}
    </PlayBarWrapper>
  );
});
