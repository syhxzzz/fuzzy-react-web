import { memo, useCallback, useEffect, useRef, useState } from "react";
import { PlayBarWrapper } from "./style";
import { PlayPanel } from "./component/play-panel";
import { useDispatch } from "react-redux";
import {
  changeCurrentLyricIndexAction,
  changePlaySongAction,
  getSongDetailAction,
} from "@/store/song-store/actionCreators";
import { message } from "antd";
import store from "@/store";
import { getPlayUrl } from "@/utils/format-utils";
export default memo(function PlayBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    playList: [
      {
        name: "有何不可",
        id: 167876,
        pst: 0,
        t: 0,
        ar: [
          {
            id: 5771,
            name: "许嵩",
            tns: [],
            alias: [],
          },
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: "600902000007916021",
        fee: 8,
        v: 49,
        crbt: null,
        cf: "",
        al: {
          id: 16953,
          name: "自定义",
          picUrl:
            "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
          tns: [],
          pic_str: "18590542604286213",
          pic: 18590542604286212,
        },
        dt: 241840,
        h: {
          br: 320000,
          fid: 0,
          size: 9675799,
          vd: -21099,
        },
        m: {
          br: 192000,
          fid: 0,
          size: 5805497,
          vd: -18400,
        },
        l: {
          br: 128000,
          fid: 0,
          size: 3870346,
          vd: -16900,
        },
        a: null,
        cd: "1",
        no: 3,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 2,
        s_id: 0,
        mark: 8192,
        originCoverType: 0,
        single: 0,
        noCopyrightRcmd: null,
        mv: 0,
        mst: 9,
        cp: 14026,
        rtype: 0,
        rurl: null,
        publishTime: 1231516800000,
      },
      {
        name: "雅俗共赏",
        id: 411214279,
        pst: 0,
        t: 0,
        ar: [
          {
            id: 5771,
            name: "许嵩",
            tns: [],
            alias: [],
          },
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: null,
        fee: 8,
        v: 31,
        crbt: null,
        cf: "",
        al: {
          id: 34749138,
          name: "青年晚报",
          picUrl:
            "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
          tns: [],
          pic: 3431575794705764,
        },
        dt: 249621,
        h: {
          br: 320000,
          fid: 0,
          size: 9987177,
          vd: -22200,
        },
        m: {
          br: 192000,
          fid: 0,
          size: 5992323,
          vd: -19600,
        },
        l: {
          br: 128000,
          fid: 0,
          size: 3994896,
          vd: -17800,
        },
        a: null,
        cd: "1",
        no: 2,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 8192,
        originCoverType: 0,
        single: 0,
        noCopyrightRcmd: null,
        mv: 5302271,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 14026,
        publishTime: 1461723397683,
      },
      {
        name: "嚣张",
        id: 1382596189,
        pst: 0,
        t: 0,
        ar: [
          {
            id: 32220939,
            name: "en",
            tns: [],
            alias: [],
          },
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: "",
        fee: 8,
        v: 10,
        crbt: null,
        cf: "",
        al: {
          id: 80816891,
          name: "嚣张",
          picUrl:
            "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
          tns: [],
          pic_str: "109951164271814514",
          pic: 109951164271814510,
        },
        dt: 253994,
        h: {
          br: 320000,
          fid: 0,
          size: 10162605,
          vd: -55669,
        },
        m: {
          br: 192000,
          fid: 0,
          size: 6097581,
          vd: -53082,
        },
        l: {
          br: 128000,
          fid: 0,
          size: 4065069,
          vd: -51369,
        },
        a: null,
        cd: "01",
        no: 1,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 0,
        originCoverType: 0,
        single: 0,
        noCopyrightRcmd: null,
        mv: 0,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 1372818,
        publishTime: 0,
      },
    ],
    playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
    currentSongIndex: [],
    currentSong: {
      name: "有何不可",
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: "许嵩",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "600902000007916021",
      fee: 8,
      v: 49,
      crbt: null,
      cf: "",
      al: {
        id: 16953,
        name: "自定义",
        picUrl:
          "https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        tns: [],
        pic_str: "18590542604286213",
        pic: 18590542604286212,
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900,
      },
      a: null,
      cd: "1",
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1231516800000,
    },
    currentLyrics: [],
    simiPlaylist: [],
    simiSongs: [],
    currentLyricIndex: -1,
  });

  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence,
  } = state;

  useEffect(() => {
    function updateState() {
      setState(store.getState().song);
    }
    const fun = store.subscribe(updateState);
    return fun;
  }, []);

  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    console.log(currentSong);
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);

  const timeUpdate = (e) => {
    console.log("timeUpdate() start");
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

  const play = useCallback(() => {
    console.log("play() start");
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
      {/* <div className="content"> */}
      <div className="play-button">
        <a
          className="prev-btn"
          onClick={(e) => dispatch(changePlaySongAction(-1))}
        >
          上一首
        </a>
        <a className="play-btn" onClick={(e) => play()}>
          切换状态
        </a>
        <a
          className="next-btn"
          onClick={(e) => dispatch(changePlaySongAction(1))}
        >
          下一首
        </a>
      </div>
      <a className="head-cover">
        <picture>
          <img
            alt=""
            src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
          />
        </picture>
      </a>
      <div className="play">
        <div className="progress-bar"></div>
      </div>
      <div className="operation"></div>
      <div className="control"></div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {showPanel && <PlayPanel />}
    </PlayBarWrapper>
  );
});
