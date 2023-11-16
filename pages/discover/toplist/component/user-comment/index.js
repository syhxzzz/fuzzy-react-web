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
      {result.map((item) => {
        return (
          <div className="comment " key={item.commentId}>
            <picture>
              <img alt="user-avatar" src={item.user.avatarUrl} />
            </picture>
            <div className="content">
              <div className="user-name">{item.user.nickname}</div>
              <div className="comment-content">{item.content}</div>
            </div>
            <div className="time-clock">{item.timeStr}</div>
            <div className="interaction">
              <div className="likes">{item.likedCount}</div>
              <div className="reply">回复</div>
            </div>
          </div>
        );
      })}
    </UserCommentWrapper>
  );
});
