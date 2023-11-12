import request from "./axios";

export function getPlaylistCategory() {
  // get All the Categories
  return request({
    url: "/playlist/catlist",
  });
}

export function getPlaylistCategoryList(cat = "全部", offset = 0, limit = 35) {
  // 拿到指定 Category 的 Playlist
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
    },
  });
}
