import request from "./axios";

export function getSearchContent(keywords) {
  return request({
    url: "/search/suggest",
    params: {
      keywords: keywords,
    },
  });
}
