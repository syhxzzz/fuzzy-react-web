import request from "./axios";

export function getComment(id, type, pageNo) {
  return request({
    url: "/comment/new",
    params: {
      id,
      type,
      //   pageNo,
    },
  });
}
/*
0: 歌曲
1: mv
2: 歌单
3: 专辑
4: 电台节目
5: 视频
6: 动态
7: 电台
*/
