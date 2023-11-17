import { memo, useEffect, useState } from "react";
import { UserCommentWrapper } from "./style";
import { getComment } from "@/services/comment";
import store from "@/store";
export default memo(function UserComment() {
  const [result, setResult] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toplist, setTopList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    function updateState() {
      setCurrentIndex(store.getState().toplist.get("currentIndex"));
      setTopList(store.getState().toplist.get("topList"));
    }
    const func = store.subscribe(updateState);
    return func;
  }, []);
  useEffect(() => {
    let id = toplist[currentIndex] && toplist[currentIndex].id;
    console.log(id);
    if (!id) return;
    getComment(id, 2, currentPage).then((res) => {
      setResult(res.data.comments);
      console.log(res);
    });
  }, [currentPage, currentIndex, toplist]);
  return (
    <UserCommentWrapper>
      <div className="comment-title">精彩评论</div>
      {result.map((item) => {
        return (
          <div className="comment" key={item.commentId}>
            <picture>
              <img alt="user-avatar" src={item.user.avatarUrl} />
            </picture>
            <div className="content">
              <div className="body">
                <p>
                  <i className="user-name">{item.user.nickname}</i>
                  {` : `}
                  <i className="comment-content">{item.content}</i>
                </p>
              </div>
              <div className="comment-bottom">
                <div className="time-clock">{item.timeStr}</div>
                <div className="interaction">
                  <a className="likes">
                    <div className="like-icon sprite_icon2"></div>
                    <div className="likes-num">({item.likedCount})</div>
                  </a>
                  <div className="divider">{`|`}</div>
                  <div className="reply">回复</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </UserCommentWrapper>
  );
});
