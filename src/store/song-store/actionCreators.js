import * as actionTypes from "./constants";
import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong,
} from "@/services/player";
import { parseLyric } from "@/utils/lrc-parse";
import store from "..";
const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song,
});

const changePlayListAction = (playlist) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playlist,
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index: Number(index),
});

const changeLyricsAction = (lyrics) => ({
  type: actionTypes.CHANGE_LYRICS,
  lyrics,
});

const changeSimiPlaylistAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_PLAYLIST,
  simiPlaylist: res.playlists,
});

const changeSimiSongAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  simiSong: res.songs,
});

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = 0;
  return {
    type: actionTypes.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence,
  };
};

export const getSimiSongAction = () => {
  return (dispatch) => {
    const id = store.getState().song.get("currentSong").id;
    if (!id) return;
    getSimiSong(id).then((res) => {
      dispatch(changeSimiSongAction(res));
    });
  };
};

export const getSimiPlaylistAction = () => {
  return (dispatch) => {
    const id = store.getState().song.get("currentSong").id;
    if (!id) return;
    getSimiPlaylist(id).then((res) => {
      dispatch(changeSimiPlaylistAction(res));
    });
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    const playList = store.getState().song.get("playList");

    const songIndex = playList.findIndex((song) => song.id === ids);
    if (songIndex !== -1) {
      // 找到数据
    } else {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        const newPlayList = [...playList, song];
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });

      getLyric(ids).then((res) => {
        const lrcString = res.lrc.lyric;
        const lyrics = parseLyric(lrcString);
        dispatch(changeLyricsAction(lyrics));
      });
    }
  };
};

export const changePlaySongAction = (tag) => {
  return (dispatch) => {
    // 1.获取当前的index
    tag = Number(tag);
    let currentSongIndex = store.getState().song.get("currentSongIndex");
    const playSequence = store.getState().song.get("playSequence");
    const playList = store.getState().song.get("playList");
    debugger;
    // 2.判断当前播放列表
    switch (playSequence) {
      case 1:
        currentSongIndex = Math.floor(Math.random() * playList.length);
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }

    // 3.处理修改数据

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));
    // 获取当前的歌词,并且解析
    getLyric(currentSong.id).then((res) => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  };
};
